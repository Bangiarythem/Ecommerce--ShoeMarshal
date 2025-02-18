import { deleteProduct } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DeleteRoute({params}: {params : {id:string}}) {
    return (
       <div className="h-[80vh] w-full flex items-center justify-center">
        <Card className="max-w-xl">
            <CardHeader>
                <CardTitle>
                    Are you absolutely sure? 
                </CardTitle>
                <CardDescription>
                    This action cannot be undone. This will permamenetly delete this product from our servers.
                </CardDescription>
            </CardHeader>
            <CardFooter className="w-full flex justify-between">
                <Button variant="secondary" asChild>
                    <Link href={`/dashboard/products`}>Cancel</Link>
                </Button>
                <form action={deleteProduct} method="POST">
                    <input type="hidden" name="productId" value={params.id}/>
                <Button variant="destructive">Continue</Button>
                </form>
            </CardFooter>
        </Card>
       </div>
    );
}