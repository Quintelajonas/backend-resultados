/*
  Warnings:

  - A unique constraint covering the columns `[promotorId,mes,ano]` on the table `DesempenhoMensal` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DesempenhoMensal_promotorId_mes_ano_key" ON "DesempenhoMensal"("promotorId", "mes", "ano");
