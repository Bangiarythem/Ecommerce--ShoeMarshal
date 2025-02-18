// import Link from "next/link";
// import Image from "next/image";
// import all from '@/public/all.jpeg'
// import men from '@/public/men.jpeg'
// import women from '@/public/women.jpeg'

// export function CategoriesSelection(){
//     return (
//        <div className="py-24 sm:py-32">
//         <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-extrabold tracking-tight">Shop By Category</h2>

//             <Link className="tex-sm font-semibold text-blue-500 hover:text-blue-500/80" href="/products/all">
//             Browse all products &rarr;
//             </Link>
//         </div>

//         <div className="mt-6 grid grid-col-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
//             <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-h sm:aspect-w-1 sm:row-span-2">
//                 <Image src={all} alt="All products" className="object-cover object-center"/>
//                 <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
//                 <div className="p-6 flex items-end" />
//                 <div>
//                     <h3>All Products</h3>
//                 </div>
//             </div>
//         </div>
//        </div>
//     );
// }

import Link from "next/link";
import Image from "next/image";
import all from "@/public/all.jpeg";
import men from "@/public/men.jpeg";
import women from "@/public/women.jpeg";

export function CategoriesSelection() {
  return (
    <div className="py-24 sm:py-32">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-extrabold tracking-tight">Shop By Category</h2>
        <Link className="text-sm font-semibold text-blue-500 hover:text-blue-500/80" href="/products/all">
          Browse all products &rarr;
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        {/* All Products */}
        <div className="relative group aspect-[2/1] rounded-xl overflow-hidden sm:aspect-[1/1] sm:row-span-2">
          <Image src={all} alt="All products" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-55 group-hover:opacity-70 transition-opacity" />
          <div className="absolute bottom-4 left-4">
            <Link href="/products/all">
            <h3 className="text-white text-lg font-semibold">All Products</h3>
            </Link>
          </div>
        </div>

        {/* Men’s Collection */}
        <div className="relative group aspect-[2/1] rounded-xl overflow-hidden sm:aspect-[1/1]">
          <Image src={men} alt="Men's Collection" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-55 group-hover:opacity-70 transition-opacity" />
          <div className="absolute bottom-4 left-4">
          <Link href="/products/men">
            <h3 className="text-white text-lg font-semibold">Men's Collection</h3>
            </Link>
          </div>
        </div>

        {/* Women's Collection */}
        <div className="relative group aspect-[2/1] rounded-xl overflow-hidden sm:aspect-[1/1]">
          <Image src={women} alt="Women's Collection" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-55 group-hover:opacity-70 transition-opacity" />
          <div className="absolute bottom-4 left-4">
          <Link href="/products/women">
            <h3 className="text-white text-lg font-semibold">Womens's collection</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
