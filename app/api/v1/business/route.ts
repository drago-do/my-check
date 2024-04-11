import { NextResponse } from "next/server";

import { getBusinessModel } from "@/models/index";


//Get all businesses
export async function GET() {
  try {
    const BusinessModel = await getBusinessModel();
    const businesses = await BusinessModel.find().select(
      "name description category logo"
    );
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


//Create a new business
export async function POST(request: Request) {
  try {
    const businessData = await request.json();

    const BusinessModel = await getBusinessModel();

    const newBusiness = new BusinessModel(businessData);

    const response = await newBusiness.save();
    return NextResponse.json({
      success: true,
      data: response,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
