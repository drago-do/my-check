import { NextResponse } from "next/server";
import { getBusinessModel } from "@/models/index";

// Verifica los negocios a los que un usuario ha sido invitado
export async function GET(
  request: Request,
  { params }: { params: { userEmail: string } }
) {
  try {
    const BusinessModel = await getBusinessModel();
    // Filtra las empresas que tienen al usuario con el email dado en invitedUser
    const userAreInvitedTo = await BusinessModel.find({
      invitedUser: { $elemMatch: { email: params.userEmail } },
    }).select("name description category logo invitedUser");

    // Recorre las empresas para asignar el usuario invitado como objeto, no como array
    const businessesWithSingleUser = userAreInvitedTo.map((business) => {
      // Encuentra al usuario invitado específico
      const invitedUser = business.invitedUser.find(
        (user) => user.email === params.userEmail
      );

      // Modifica el business para que invitedUser sea un objeto en vez de un array
      return {
        _id: business._id,
        name: business.name,
        description: business.description,
        category: business.category,
        logo: business.logo,
        invitedUser: invitedUser
          ? {
              email: invitedUser.email,
              role: invitedUser.role,
              _id: invitedUser._id,
            }
          : null,
      };
    });

    return NextResponse.json({
      businesses: businessesWithSingleUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
