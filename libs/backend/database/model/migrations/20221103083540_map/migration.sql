/*
  Warnings:

  - You are about to drop the column `createdAt` on the `CreditCard` table. All the data in the column will be lost.
  - You are about to drop the column `idAddress` on the `JoinUserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `idUser` on the `JoinUserAddress` table. All the data in the column will be lost.
  - You are about to drop the column `idCreditCard` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `idUser` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `idOrder` on the `OrderedItem` table. All the data in the column will be lost.
  - You are about to drop the column `idProduct` on the `OrderedItem` table. All the data in the column will be lost.
  - Added the required column `Address` to the `JoinUserAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User` to the `JoinUserAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CreditCard` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Order` to the `OrderedItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Product` to the `OrderedItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "JoinUserAddress" DROP CONSTRAINT "JoinUserAddress_idAddress_fkey";

-- DropForeignKey
ALTER TABLE "JoinUserAddress" DROP CONSTRAINT "JoinUserAddress_idUser_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_idCreditCard_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_idUser_fkey";

-- DropForeignKey
ALTER TABLE "OrderedItem" DROP CONSTRAINT "OrderedItem_idOrder_fkey";

-- DropForeignKey
ALTER TABLE "OrderedItem" DROP CONSTRAINT "OrderedItem_idProduct_fkey";

-- AlterTable
ALTER TABLE "CreditCard" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "JoinUserAddress" DROP COLUMN "idAddress",
DROP COLUMN "idUser",
ADD COLUMN     "Address" INTEGER NOT NULL,
ADD COLUMN     "User" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "idCreditCard",
DROP COLUMN "idUser",
ADD COLUMN     "CreditCard" INTEGER NOT NULL,
ADD COLUMN     "User" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrderedItem" DROP COLUMN "idOrder",
DROP COLUMN "idProduct",
ADD COLUMN     "Order" INTEGER NOT NULL,
ADD COLUMN     "Product" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "JoinUserAddress" ADD CONSTRAINT "JoinUserAddress_User_fkey" FOREIGN KEY ("User") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoinUserAddress" ADD CONSTRAINT "JoinUserAddress_Address_fkey" FOREIGN KEY ("Address") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_User_fkey" FOREIGN KEY ("User") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_CreditCard_fkey" FOREIGN KEY ("CreditCard") REFERENCES "CreditCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedItem" ADD CONSTRAINT "OrderedItem_Product_fkey" FOREIGN KEY ("Product") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderedItem" ADD CONSTRAINT "OrderedItem_Order_fkey" FOREIGN KEY ("Order") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
