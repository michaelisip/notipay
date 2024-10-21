/*
  Warnings:

  - You are about to drop the column `user_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `products` table. All the data in the column will be lost.
  - Added the required column `sellerId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_user_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "user_id",
ADD COLUMN     "sellerId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
