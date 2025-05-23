-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "promotorId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "abordou" BOOLEAN NOT NULL,
    "uniformizado" BOOLEAN NOT NULL,
    "dominaProduto" BOOLEAN NOT NULL,
    "advertencia" BOOLEAN NOT NULL,
    "motivoAdvertencia" TEXT,
    "Observações" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_promotorId_fkey" FOREIGN KEY ("promotorId") REFERENCES "Promotor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
