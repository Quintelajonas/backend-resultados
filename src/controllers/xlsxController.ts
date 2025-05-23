import { Request, Response } from "express";
import * as XLSX from "xlsx";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function uploadXLSX(req: Request, res: Response) {
  const file = req.file;

  if (!file) {
    res.status(400).json({ error: "Arquivo não enviado" });
    return;
  }

  const workbook = XLSX.readFile(file.path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data: any[] = XLSX.utils.sheet_to_json(sheet);

  for (const row of data) {
    const promotor = await prisma.promotor.upsert({
      where: { matricula: String(row.matricula) },
      update: { fotoUrl: row.foto || "",
        email: row.email,
        telefone: String(row.telefone)
       },
      create: {
        nome: row.nome,
        matricula: String(row.matricula),
        email: row.email,
        telefone: String(row.telefone),
        fotoUrl: row.foto || "",
      },
    });

    await prisma.desempenhoMensal.upsert({
      where: {
        promotorId_mes_ano: {
          promotorId: promotor.id,
          mes: Number(row.mes),
          ano: Number(row.ano),
        },
      },
      update: {
        vendas: Number(row.vendas),
        faltas: Number(row.faltas),
      },

      create: {
        promotorId: promotor.id,
        mes: Number(row.mes),
        ano: Number(row.ano),
        vendas: Number(row.vendas),
        faltas: Number(row.faltas),
      },
    });
  }
  res.json({ message: "Dados processados com sucesso" });
  return;
}
