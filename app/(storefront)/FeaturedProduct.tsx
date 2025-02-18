import Link from "next/link";
import { prisma } from "../lib/db";
import { ProductCard } from "./ProductCard";
async function getData() {
  const data = await prisma.product.findMany({
    where: {
      status: "pubblished",
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export async function FeaturedPoduct() {
  const data = await getData();
  return (
    <>
      <div className="py-10 sm:py-20">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Featured Product
          </h2>
        </div>
      </div>
      <div className="mt-5 grid sm:grid-col-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
            <ProductCard key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
}
