import { NextResponse } from "next/server";

import { getBusinessModel } from "@/models/index";

//Get one business
export async function GET(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const BusinessModel = await getBusinessModel();
    const businesses = await BusinessModel.findById(params._id);
    return NextResponse.json({
      success: true,
      data: businesses,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
