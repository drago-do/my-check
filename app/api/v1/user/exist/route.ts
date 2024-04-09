import { NextResponse } from "next/server";
// Asumiendo que has exportado getUserModel desde tu archivo de modelos como se sugirió.
import { getUserModel } from "@/models/index"; // Ajusta la ruta según sea necesario

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    // const { db } = profile; // Suponiendo que 'db' indique el nombre de la base de datos a usar, si es necesario.

    // Aquí ya no necesitas llamar a connect(db) porque getUserModel maneja la conexión internamente.
    // Nota: Si cada usuario tiene su propia DB basada en 'db', deberías ajustar getUserModel para aceptar 'db' como argumento.

    // Obtén el modelo de usuario usando la función específica.
    const UserModel = await getUserModel();

    // Ahora puedes usar UserModel para buscar en la base de datos.
    let userFound = await UserModel.findOne({ email: email });
    if (userFound) {
      return NextResponse.json({
        success: true,
        data: {
          result: true,
          userId: userFound._id,
          message: "User already exists",
        },
      });
    } else {
      return NextResponse.json({
        success: true,
        data: { result: false, message: "User does not exist" },
      });
    }
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
