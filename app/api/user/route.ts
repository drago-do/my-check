import { NextResponse } from "next/server";
// Asumiendo que has exportado getUserModel desde tu archivo de modelos como se sugirió.
import { getUserModel } from "@/models/index"; // Ajusta la ruta según sea necesario

export async function POST(request: Request) {
  const userData = await request.json();
  // const { db } = profile; // Suponiendo que 'db' indique el nombre de la base de datos a usar, si es necesario.

  // Aquí ya no necesitas llamar a connect(db) porque getUserModel maneja la conexión internamente.
  // Nota: Si cada usuario tiene su propia DB basada en 'db', deberías ajustar getUserModel para aceptar 'db' como argumento.

  // Obtén el modelo de usuario usando la función específica.
  const UserModel = await getUserModel();

  //Usar UserModel para crear un nuevo usuario
  const newUser = new UserModel(userData);

  try {
    await newUser.save();
    return NextResponse.json({
      message: "User created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error creating user",
      error: error,
    });
  }
}

export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello World" });
}
