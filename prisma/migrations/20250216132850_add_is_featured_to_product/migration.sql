-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('draft', 'pubblished', 'archived');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('men', 'women', 'kids');

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL,
    "price" INTEGER NOT NULL,
    "images" TEXT[],
    "category" "Category" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
