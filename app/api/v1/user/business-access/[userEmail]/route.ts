import { NextResponse } from "next/server";
import { getUserModel, getBusinessModel } from "@/models/index";

export async function GET(
  request: Request,
  { params }: { params: { userEmail: string } }
) {
  try {
    const UserModel = await getUserModel();
    const BusinessModel = await getBusinessModel();
    const userAreAccessTo = await UserModel.findOne({
      email: params.userEmail,
    })
      .select("permissions")
      .populate({
        path: "permissions.entity",
        select: "name description category logo",
      });
    return NextResponse.json({
      permissions: userAreAccessTo?.permissions,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
