import { NextResponse } from "next/server";
import { getUserModel } from "@/models/index";

export async function GET(
  request: Request,
  { params }: { params: { userEmail: string } }
) {
  try {
    console.log("params", params);

    const UserModel = await getUserModel();
    const userAreAccessTo = await UserModel.findOne({
      email: params.userEmail,
    }).select("permissions");
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
