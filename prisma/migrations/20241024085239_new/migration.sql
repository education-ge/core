/*
  Warnings:

  - You are about to drop the column `address` on the `Kindergarten` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Kindergarten` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Kindergarten` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `Kindergarten` table. All the data in the column will be lost.
  - Added the required column `address_en` to the `KindergartenTranslation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `KindergartenTranslation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Kindergarten_name_idx";

-- AlterTable
ALTER TABLE "Kindergarten" DROP COLUMN "address",
DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "shortDescription";

-- AlterTable
ALTER TABLE "KindergartenTranslation" ADD COLUMN     "address_en" TEXT NOT NULL,
ADD COLUMN     "description_en" TEXT,
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "shortDescription_en" TEXT;
