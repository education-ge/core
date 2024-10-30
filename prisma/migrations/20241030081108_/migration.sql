/*
  Warnings:

  - You are about to drop the column `name` on the `Language` table. All the data in the column will be lost.
  - Added the required column `name_en` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ge` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `Language` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Language" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ge" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL;
