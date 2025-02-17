import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";

export async function GET() {
    try {
        const testUser = await prisma.user.create({
            data: {
                id: "test123",
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@example.com",
                profileImage: "https://avatar.vercel.sh/johndoe",
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                profileImage: true,
                // Remove createdAt if not needed
                // createdAt: true 
            }
        });

        console.log("✅ Test user created:", testUser);
        return NextResponse.json({ success: true, user: testUser });
    } catch (error) {
        console.error("🚨 Prisma Insert Error:", error);
        return NextResponse.json({ error: "Database operation failed." }, { status: 500 });
    }
}
