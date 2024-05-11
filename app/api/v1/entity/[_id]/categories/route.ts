import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { _id: string } }
) {
  return NextResponse.json({
    message: "Hello World " + params._id,
  });
}
