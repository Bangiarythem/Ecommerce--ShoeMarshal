import { prisma } from "@/app/lib/db"
import { notFound } from "next/navigation";
import { title } from "process";
import { ProductCard } from "../../ProductCard";

async function getData(productCategory: string){
    switch(productCategory){
        case "all" : {
            const data = await prisma.product.findMany({
                select:{
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where:{
                    status:"pubblished",
                },
            });

            return {
                title: "All Products",
                data: data,
            };
        } case "men" : {
            const data = await prisma.product.findMany({
                select:{
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where:{
                    status:"pubblished",
                    category: "men",
                },
            });

            return {
                title : "Products for men",
                data: data,
            };
        } case "women" : {
            const data = await prisma.product.findMany({
                select:{
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where:{
                    status:"pubblished",
                    category: "women",
                },
            });


            return {
                title : "Products for women",
                data: data,
            };
        }
        default:{
            return notFound();
        }
    }
}


// export default async function CategoriesPage({ params }: { params: { name: string } }) {
//     const data = await getData(params.name);

//     return (
//         <div>
//             <h1 className="font-semibold text-3xl my-5">Category: {params.name}</h1>
//             <div className="grid md:frid-cols-2 lg:cols-cols-3 gap-5">
//                 {data.map(item) =>{
//                     <ProductCard />
//                 }}
//             </div>
//         </div>
//     );
// }
