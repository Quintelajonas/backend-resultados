/*
  Warnings:

  - A unique constraint covering the columns `[matricula]` on the table `Promotor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `matricula` to the `Promotor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Promotor" ADD COLUMN     "matricula" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Promotor_matricula_key" ON "Promotor"("matricula");
