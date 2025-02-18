"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { bannerSchema, productSchema } from "./lib/zodSchemas";
import { prisma } from "./lib/db";
import { Category, ProductStatus } from "@prisma/client";
import { Description } from "@radix-ui/react-dialog";

export async function createProduct(prevState: unknown, fromdata: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "rythembangia2004@gmail.com") {
    return redirect("/");
  }

  const submission = parseWithZod(fromdata, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  
  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status as ProductStatus,
      price: submission.value.price,
      images: submission.value.images,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
    },
  });

  
  console.log("Product created successfully!");
  redirect("/dashboard/products");
}


export async function editProduct(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "rythembangia2004@gmail.com") {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const productId = formData.get('productId') as string;

  if (!productId || typeof productId !== 'string') {
    throw new Error('Invalid productId');
  }

  const existingProduct = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!existingProduct) {
    throw new Error(`Product with ID ${productId} not found.`);
  }

  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      price: submission.value.price,
      isFeatured: Boolean(submission.value.isFeatured),
      status: submission.value.status,
      images: submission.value.images,
    },
  });

  return redirect("/dashboard/products");
}

export async function deleteProduct(formData: FormData){
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "rythembangia2004@gmail.com") {
    return redirect("/");
  }

  await prisma.product.delete({
    where: {
      id: formData.get("productId") as string,
    },
  });

  redirect("/dashboard/products");
}


export async function createBanner(prevState: any, formData: FormData){
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "rythembangia2004@gmail.com") {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: bannerSchema,
  });

  if(submission.status !== 'success'){
    return submission.reply();
  }

  await prisma.banner.create({
    data: {
      title: submission.value.title, 
      imageString: submission.value.imageString ?? "",
    },
  });
   return redirect('/dashboard/banner');
}

