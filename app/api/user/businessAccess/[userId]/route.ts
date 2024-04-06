import { NextResponse } from "next/server";
import { getBusinessModel } from "@/models/index";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const BusinessModel = await getBusinessModel();
    const userAreAccessTo = await BusinessModel.find({
      $or: [
        { delegatedOperators: params.userId }, // Verifica si el usuario está en la lista de delegatedOperators
        { created_by: params.userId }, // Verifica si el usuario es el creador del negocio
      ],
    }).select("name description category logo");
    return NextResponse.json({
      success: true,
      data: userAreAccessTo,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
