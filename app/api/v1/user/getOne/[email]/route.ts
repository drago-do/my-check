import { NextResponse } from "next/server";
import { getUserModel } from "@/models/index";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  try {
    const UserModel = await getUserModel();
    const user = await UserModel.findOne({ email: params.email }).select(
      "firstName lastName email isActive username permissions image"
    );
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
