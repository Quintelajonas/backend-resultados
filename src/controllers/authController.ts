import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../../generated/prisma";
import { error } from "console";

const prisma = new PrismaClient();

export async function login(req: Request, res: Response) {
  const { email, senha } = req.body;
  const user = await prisma.usuario.findFirst({ where: { email } });
  if (!user) {
    res.status(401).json({ error: "Usuário Não encontrado" });
    return;
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);
  if (!senhaValida) {
    res.status(401).json({ error: "Senha inválida" });
    return;
  }

  const token = jwt.sign({ userID: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
  res.json({ token, nome: user.nome });
}

export async function register(req: Request, res: Response) {
  const { nome, email, senha, matricula } = req.body;

  if (!nome || !email || !senha || !matricula) {
    res.status(400).json({ error: "Nome, Email e senha são Obrigatórios" });
    return;
  }

  const senhaCriptografada = await bcrypt.hash(senha, 10);

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

export async function BuscarUsuarios(req: Request, res: Response) {
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
      ].filter(Boolean) as any,
    },
  });

  if (!usuario) {
    res.status(404).json({ error: "usuário não encontrado!" });
    return;
  }

  res.json(usuario);
  return;
}


export async function buscarUsuariosFeedback(req: Request, res: Response) {

    try{

        const usuarios = await prisma.usuario.findMany();
        if(!usuarios){res.status(404).json({error: "Usuarios não enconrados"})
        return}
        
        res.json(usuarios)
        
    }catch(error){
        res.status(500).json({error: "erro ao buscar usuários"})
    }

    
    
}