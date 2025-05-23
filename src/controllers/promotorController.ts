import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { error } from "console";
import { rootCertificates } from "tls";

const prisma = new PrismaClient();

export async function BuscarPorNome(req: Request, res: Response) {
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

export async function BuscarPromotoresGeral(req: Request, res: Response) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 4;
  const offset = (page - 1) * limit;

  const nome = req.query.nome as string;
  const matricula = req.query.matricula as string;

  try {
    const desempenhoMensal = await prisma.desempenhoMensal.findMany();

    const where: any = {};

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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar promotores" });
  }
}

export async function DetalhamentoPromtor(req: Request, res: Response) {
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

    res.json({promotor});
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: "Erro ao buscar promotor" });
  }
}
