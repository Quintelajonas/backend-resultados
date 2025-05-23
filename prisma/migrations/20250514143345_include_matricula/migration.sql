/*
  Warnings:

  - A unique constraint covering the columns `[matricula]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `matricula` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "matricula" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_matricula_key" ON "Usuario"("matricula");
