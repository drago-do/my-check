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
    if (!user) {
      return NextResponse.json({
        error: "Not Found",
        message: "User not found",
      });
    }
    return NextResponse.json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isActive: user.isActive,
      username: user.username,
      permissions: user.permissions,
      image: user.image,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
