import { NextResponse } from "next/server";
import { getBusinessModel } from "@/models/index";

//Verifica los negocios a los que un usuario ha sido invitado
export async function GET(
  request: Request,
  { params }: { params: { userEmail: string } }
) {
  try {
    const BusinessModel = await getBusinessModel();
    const userAreInvitedTo = await BusinessModel.find({
      invitedUser: { $elemMatch: { email: params.userEmail } },
    }).select("name description category logo invitedUser");

    return NextResponse.json({
      success: true,
      data: userAreInvitedTo,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
