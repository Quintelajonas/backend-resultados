-- CreateTable
CREATE TABLE "DesempenhoMensal" (
    "id" SERIAL NOT NULL,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "vendas" INTEGER NOT NULL,
    "faltas" INTEGER NOT NULL,
    "promotorId" INTEGER NOT NULL,

    CONSTRAINT "DesempenhoMensal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DesempenhoMensal" ADD CONSTRAINT "DesempenhoMensal_promotorId_fkey" FOREIGN KEY ("promotorId") REFERENCES "Promotor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
