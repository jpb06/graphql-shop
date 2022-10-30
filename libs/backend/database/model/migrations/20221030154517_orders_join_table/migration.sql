/*
  Warnings:

  - You are about to drop the column `idOrderItems` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `OrderItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_idOrderItems_fkey";

-- DropForeignKey
ALTER TABLE "OrderItems" DROP CONSTRAINT "OrderItems_idProduct_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "idOrderItems";

-- DropTable
DROP TABLE "OrderItems";

-- CreateTable
CREATE TABLE "OrderedItem" (
    "id" SERIAL NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "idOrder" INTEGER NOT NULL,

    CONSTRAINT "OrderedItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderedItem" ADD CONSTRAINT "OrderedItem_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedItem" ADD CONSTRAINT "OrderedItem_idOrder_fkey" FOREIGN KEY ("idOrder") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
