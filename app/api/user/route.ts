import { NextResponse } from "next/server";
import { connect } from "@/lib/mongodb";

//Importa el modelo de usuario
import UserModel from "@/models/User";

export async function POST(request: Request) {
  const { profile } = await request?.json();
  const { db } = profile;
  let conn = await connect(db);

  console.log(conn);

  let userFound = await UserModel.findOne({ email: profile.email });
  if (userFound) {
    return NextResponse.json({
      message: "User already exists",
    });
  } else {
    return NextResponse.json({
      message: "Hello World",
    });
  }
}
