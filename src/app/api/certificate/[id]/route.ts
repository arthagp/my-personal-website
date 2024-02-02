import prisma from "../../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  try {
    const id = Number(context.params.id || 0);

    const certificate = await prisma.certificate.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ data: certificate }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error }, { status: 200 });
  }
};
