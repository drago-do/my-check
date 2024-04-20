import { NextResponse } from "next/server";
import { getUserModel } from "@/models/index";

export async function DELETE(
  request: Request,
  { params }: { params: { userEmail: string; _idBusiness: string } }
) {
  try {
    const UserModel = await getUserModel();
    const user = await UserModel.findOne({ email: params.userEmail });
    if (!user) {
      return NextResponse.json({
        success: false,
        error: "User not found",
        message: "User not found",
      });
    }

    const updateUserPermissions = await UserModel.updateOne(
      { email: params.userEmail },
      {
        $pull: {
          permissions: { entity: params._idBusiness },
        },
      }
    );

    return NextResponse.json({
      success: true,
      data: updateUserPermissions,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
