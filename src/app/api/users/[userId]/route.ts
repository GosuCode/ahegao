import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }){
    // const id = +params.userId;
    // if(isNaN(id)) return new NextResponse("Please provide an integer id", {status: 400})

    const foundUser = await prisma.user.findFirst({
        where: {
            id: params.userId
        }
    })

    if(!foundUser) return new NextResponse("User not found", {status: 404})
    return NextResponse.json({
        data: foundUser
    })
}
