/*
  Warnings:

  - The `techStack` column on the `Portofolio` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Portofolio" DROP COLUMN "techStack",
ADD COLUMN     "techStack" INTEGER[];
