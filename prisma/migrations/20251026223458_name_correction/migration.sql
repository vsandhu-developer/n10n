/*
  Warnings:

  - You are about to drop the column `postition` on the `Nodes` table. All the data in the column will be lost.
  - Added the required column `position` to the `Nodes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Nodes" DROP COLUMN "postition",
ADD COLUMN     "position" JSONB NOT NULL;
