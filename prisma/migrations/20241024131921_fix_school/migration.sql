/*
  Warnings:

  - You are about to drop the column `address` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `curriculums` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `educationLevels` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `extracurriculars` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerYear` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `studentsInClass` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `studentsTotal` on the `School` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "School_name_idx";

-- AlterTable
ALTER TABLE "School" DROP COLUMN "address",
DROP COLUMN "curriculums",
DROP COLUMN "description",
DROP COLUMN "educationLevels",
DROP COLUMN "extracurriculars",
DROP COLUMN "name",
DROP COLUMN "pricePerYear",
DROP COLUMN "shortDescription",
DROP COLUMN "studentsInClass",
DROP COLUMN "studentsTotal",
ADD COLUMN     "openingHours" TEXT[];

-- CreateTable
CREATE TABLE "SchoolTranslation" (
    "schoolId" INTEGER NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_ge" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "address_en" TEXT NOT NULL,
    "address_ge" TEXT NOT NULL,
    "address_ru" TEXT NOT NULL,
    "shortDescription_en" TEXT,
    "shortDescription_ge" TEXT,
    "shortDescription_ru" TEXT,
    "description_en" TEXT,
    "description_ge" TEXT,
    "description_ru" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SchoolTranslation_pkey" PRIMARY KEY ("schoolId")
);

-- AddForeignKey
ALTER TABLE "SchoolTranslation" ADD CONSTRAINT "SchoolTranslation_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
