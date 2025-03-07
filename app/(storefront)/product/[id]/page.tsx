import { prisma } from "@/app/lib/db";
import { ShoppingBag, StarIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { ImageSlider } from "../../ImageSlider";
import { Button } from "@/components/ui/button";
import { FeaturedPoduct } from "../../FeaturedProduct";

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: { id: productId },
    select: {
      price: true,
      images: true,
      description: true,
      name: true,
      id: true,
    },
  });

  if (!data) return notFound();

  return data;
}

export default async function ProductIdRoute({ params }: { params: { id: string } }) {
  noStore();
  const data = await getData(params.id);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
      {/* Image Slider */}
      <ImageSlider images={data.images} />
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {data.name}
        </h1>
        <p className="text-3xl mt-2 text-gray-900">${data.price}</p>
        <div className="ht-3 flex items-center gap-1 border-none">
            <StarIcon className="h-4 w-4 tetx-yellow-500 fill-yellow-500"/>
            <StarIcon className="h-4 w-4 tetx-yellow-500 fill-yellow-500"/>
            <StarIcon className="h-4 w-4 tetx-yellow-500 fill-yellow-500"/>
            <StarIcon className="h-4 w-4 tetx-yellow-500 fill-yellow-500"/>
            <StarIcon className="h-4 w-4 tetx-yellow-500 fill-yellow-500"/>
        </div>
        <p className="text-base text-gray-700 mt-6">{data.description}</p>
        <Button size="lg" className="w-full mt-5"><ShoppingBag className="mr-4 h-5 w-5"/>Add to Cart</Button>
        </div>
      </div>

      <div className="mt-16">
        <FeaturedPoduct />
      </div>
      </>
  );
}
