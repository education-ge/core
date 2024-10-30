/*
  Warnings:

  - You are about to drop the column `name` on the `Area` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `City` table. All the data in the column will be lost.
  - Added the required column `name_en` to the `Area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ge` to the `Area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `Area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ge` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Area" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ge" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "City" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ge" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL;
