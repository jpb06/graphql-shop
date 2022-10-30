/*
  Warnings:

  - Added the required column `quantity` to the `OrderedItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderedItem" ADD COLUMN     "quantity" INTEGER NOT NULL;
