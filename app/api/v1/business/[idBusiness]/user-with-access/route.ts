import { NextResponse } from "next/server";

import { getBusinessModel, getUserModel } from "@/models/index";

//Get all users with access to businesses
export async function GET(
  request: Request,
  { params }: { params: { idBusiness: string } }
) {
  try {
    const UserModel = await getUserModel();
    const users = await UserModel.find({
      permissions: { $elemMatch: { entity: params.idBusiness } },
    }).exec();

    if (users.length === 0) {
      return NextResponse.json(
        {
          error: "Not Found",
          message: "No users found with access to this business",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
