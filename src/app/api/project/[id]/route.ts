import prisma from "../../../../../prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = Number(context.params.id || 0); // jadi jika tidak ada data maka return default value '0'
    const response = await prisma.portofolio.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 400 });
  }
}
