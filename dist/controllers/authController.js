"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.register = register;
exports.BuscarUsuarios = BuscarUsuarios;
exports.buscarUsuariosFeedback = buscarUsuariosFeedback;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function login(req, res) {
    const { email, senha } = req.body;
    const user = await prisma.usuario.findFirst({ where: { email } });
    if (!user) {
        res.status(401).json({ error: "Usuário Não encontrado" });
        return;
    }
    const senhaValida = await bcrypt_1.default.compare(senha, user.senha);
    if (!senhaValida) {
        res.status(401).json({ error: "Senha inválida" });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ userID: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    res.json({ token, nome: user.nome });
}
async function register(req, res) {
    const { nome, email, senha, matricula } = req.body;
    if (!nome || !email || !senha || !matricula) {
        res.status(400).json({ error: "Nome, Email e senha são Obrigatórios" });
        return;
    }
    const senhaCriptografada = await bcrypt_1.default.hash(senha, 10);
    const novoUsuario = await prisma.usuario.create({
        data: {
            matricula,
            nome,
            email,
            senha: senhaCriptografada,
        },
    });
    res
        .status(201)
        .json({
        message: "Usuário Criado com sucesso!",
        usuario: {
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email,
        },
    });
    return;
}
async function BuscarUsuarios(req, res) {
    const { nome, email, matricula } = req.body;
    if (!nome && !email && !matricula) {
        res.status(400).json({ error: "forneça os dados para a busca" });
        return;
    }
    const usuario = await prisma.usuario.findFirst({
        where: {
            OR: [
                nome ? { nome: { contains: nome, mode: "insensitive" } } : undefined,
                email ? { nome: { contains: nome, mode: "insensitive" } } : undefined,
                matricula
                    ? { nome: { contains: nome, mode: "insensitive" } }
                    : undefined,
            ].filter(Boolean),
        },
    });
    if (!usuario) {
        res.status(404).json({ error: "usuário não encontrado!" });
        return;
    }
    res.json(usuario);
    return;
}
async function buscarUsuariosFeedback(req, res) {
    try {
        const usuarios = await prisma.usuario.findMany();
        if (!usuarios) {
            res.status(404).json({ error: "Usuarios não enconrados" });
            return;
        }
        res.json(usuarios);
    }
    catch (error) {
        res.status(500).json({ error: "erro ao buscar usuários" });
    }
}
