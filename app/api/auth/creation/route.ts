import { prisma } from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    console.log("Kinde User Object:", user); // Log full user object

    if (!user || !user.id) {
        console.error("Error: Missing user data", user);
        throw new Error("Something went wrong...");
    }

    console.log("Checking user in Prisma:", user.id);

    try {
        let dbUser = await prisma.user.findUnique({
            where: { id: user.id },
        });

        if (!dbUser) {
            console.log("User not found, creating new user...");
            dbUser = await prisma.user.create({
                data: {
                    id: user.id,
                    firstName: user.given_name ?? "", 
                    lastName: user.family_name ?? "",
                    email: user.email ?? "",
                    profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
                },
            });
            console.log("✅ User created successfully:", dbUser);
        } else {
            console.log("🔹 User already exists:", dbUser);
        }
        
        return NextResponse.redirect("http://localhost:3000/");
    } catch (error) {
        console.error("🚨 Prisma Error:", error);
        return NextResponse.json({ error: "Database operation failed." }, { status: 500 });
    }
}
