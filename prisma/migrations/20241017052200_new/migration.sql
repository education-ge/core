/*
  Warnings:

  - The `openingHours` column on the `Kindergarten` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Kindergarten" DROP COLUMN "openingHours",
ADD COLUMN     "openingHours" TEXT[],
ALTER COLUMN "teachersCount" DROP NOT NULL,
ALTER COLUMN "groups" DROP NOT NULL,
ALTER COLUMN "sleepingPlaces" DROP NOT NULL;
