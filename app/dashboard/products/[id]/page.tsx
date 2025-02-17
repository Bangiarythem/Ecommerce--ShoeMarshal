import { EditForm } from "@/app/components/dashboard2/EditForm";
import { prisma } from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getData(productId: string) {
    const data = await prisma.product.findUnique({
        where: {
            id: productId,
        },
    });

    if (!data) {
        throw notFound();
    }

    return data;
}

export default async function EditRoute({ params }: { params: { id: string } }) {
    const { id } = await params; // Awaiting params here
    const data = await getData(id);
    return <EditForm data={data} />;
}
