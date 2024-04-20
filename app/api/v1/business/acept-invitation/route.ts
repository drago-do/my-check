import { NextResponse } from "next/server";

import { getBusinessModel, getUserModel } from "@/models/index";

//Accept invitation to join a business
export async function POST(request: Request) {
  try {
    const invitationData = await request.json();
    const { email, role, _id } = invitationData;

    //Add (push it) id and role to user: {permissions:[{role:role, entity:_id}]}
    const UserModel = await getUserModel();
    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const BusinessModel = await getBusinessModel();
    const business = await BusinessModel.findById(_id).select(
      "name description category logo invitedUser"
    );

    if (!business) {
      return NextResponse.json(
        {
          success: false,
          error: "Business not found",
          message: "Business not found",
        },
        { status: 404 }
      );
    }

    const permissions = user.permissions;
    const permission = { role, entity: _id };
    permissions.push(permission);

    const response = await UserModel.updateOne(
      {
        email,
      },
      {
        permissions,
      }
    );

    //Delete invitation from business
    const updatedBusiness = await BusinessModel.updateOne(
      {
        _id,
      },
      {
        $pull: {
          invitedUser: {
            email,
          },
        },
      }
    );

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
