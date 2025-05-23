"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarPorNome = BuscarPorNome;
exports.BuscarPromotoresGeral = BuscarPromotoresGeral;
exports.DetalhamentoPromtor = DetalhamentoPromtor;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
async function BuscarPorNome(req, res) {
    const { nome } = req.query;
    const promtor = await prisma.promotor.findFirst({
        where: { nome: { contains: String(nome), mode: "insensitive" } },
        include: {
            desempenho: {
                orderBy: {
                    ano: "desc",
                },
            },
        },
    });
    if (!promtor) {
        res.status(404).json({ error: "Promotor não encontrado" });
        return;
    }
    res.json(promtor);
    return;
}
async function BuscarPromotoresGeral(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;
    const offset = (page - 1) * limit;
    const nome = req.query.nome;
    const matricula = req.query.matricula;
    try {
        const desempenhoMensal = await prisma.desempenhoMensal.findMany();
        const where = {};
        if (nome) {
            where.nome = { contains: nome, mode: "insensitive" };
        }
        if (matricula) {
            where.matricula = { contains: matricula, mode: "insensitive" };
        }
        const total = await prisma.promotor.count({ where });
        const promotores = await prisma.promotor.findMany({
            skip: offset,
            take: limit,
            orderBy: { id: "asc" },
            where,
            include: {
                desempenho: {
                    orderBy: { ano: "desc" },
                },
            },
        });
        res.json({
            data: promotores,
            currentPage: page,
            totalPage: Math.ceil(total / limit),
            totalItems: total,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar promotores" });
    }
}
async function DetalhamentoPromtor(req, res) {
    const { id } = req.params;
    try {
        const promotor = await prisma.promotor.findUnique({
            where: { id: Number(id) },
            include: {
                desempenho: true,
            },
        });
        if (!promotor) {
            res.status(404).json({ error: "Promotor não encontrado!" });
            return;
        }
        res.json({ promotor });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro ao buscar promotor" });
    }
}
