import { NextResponse } from "next/server";
import { getBusinessModel } from "@/models/index";

//Agrega un usuario a la lista de invitados de un negocio
export async function POST(request: Request) {
  const body = await request.json();

  try {
    const BusinessModel = await getBusinessModel();
    const business = await BusinessModel.findById(body.businessId);
    if (!business) {
      return NextResponse.json({
        success: false,
        error: "Business not found",
      });
    }

    business.invitedUser.push(body.invitedUser);
    await business.save();
    return NextResponse.json({
      success: true,
      message: "User invited",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}

//Elimina un usuario de la lista de invitados de un negocio
export async function DELETE(request: Request) {
  const body = await request.json();

  try {
    const BusinessModel = await getBusinessModel();
    const business = await BusinessModel.findById(body.businessId);
    if (!business) {
      return NextResponse.json({
        success: false,
        error: "Business not found",
      });
    }

    // Asume que body.invitedUser.email contiene el correo electrónico a eliminar
    business.invitedUser.pull({ email: body.invitedUser.email });
    await business.save();

    return NextResponse.json({
      success: true,
      message: "User removed",
      business: business.toObject(), // Para devolver un objeto simple, no un documento de Mongoose
    });
  } catch (error: any) {
    console.error(error); // Mejor práctica: registra el error en el servidor
    return NextResponse.json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
}
