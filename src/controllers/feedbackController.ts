import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function criarFeedBack(req: Request, res: Response) {
  const {
    promotorId,
    usuarioId,
    abordou,
    uniformizado,
    dominaProduto,
    advertencia,
    motivoAdvertencia,
    observacoes,
  } = req.body;

      if (!promotorId || !usuarioId) {
      res.status(400).json({ error: "promotorId e usuarioId são obrigatórios" });
      return
    }

  try {
    const feedback = await prisma.feedback.create({
        data: {
            promotorId: Number(promotorId),
            usuarioId: Number(usuarioId),
            abordou: Boolean(abordou),
            dominaProduto: Boolean(dominaProduto),
            uniformizado: Boolean(uniformizado),
            advertencia: Boolean(advertencia),
            motivoAdvertencia: advertencia ? motivoAdvertencia : null,
            observacoes: observacoes
        }
    })

    res.status(201).json(feedback)
  } catch (error) {
    console.log("erro ao criar Feedback:", error)
    res.status(500).json({error: "Erro Ao criar Feedback"})
  }
}

export const listarFeedbacksPorPromotor = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const feedbacks = await prisma.feedback.findMany({
      where: { promotorId: id },
      include: {
        usuario: true
      },
      orderBy: {
        criadoEm: 'desc'
      }
    });

    res.json({ feedbacks });
  } catch (error) {
    console.error("Erro ao buscar feedbacks:", error);
    res.status(500).json({ error: "Erro ao buscar feedbacks do promotor" });
  }
};