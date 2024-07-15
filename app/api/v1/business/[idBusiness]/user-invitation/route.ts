import { NextResponse } from "next/server";

import { getBusinessModel } from "@/models/index";

//Get mails of users invited
export async function GET(
  request: Request,
  { params }: { params: { idBusiness: string } }
) {
  try {
    const BusinessModel = await getBusinessModel();
    const invitations = await BusinessModel.findById(params.idBusiness)
      .select("invitedUser")
      .exec();

    return NextResponse.json(invitations?.invitedUser);
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
