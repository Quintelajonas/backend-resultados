/*
  Warnings:

  - You are about to drop the column `Observações` on the `Feedback` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "Observações",
ADD COLUMN     "observacoes" TEXT;
