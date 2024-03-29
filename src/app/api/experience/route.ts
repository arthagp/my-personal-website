import prisma from "../../../../prisma/client";
import { NextResponse } from "next/server";

// ambil alldata dari table experience -> prisma
export async function GET() {
  try {
    const response = await prisma.experience.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 400 });
  }
}
