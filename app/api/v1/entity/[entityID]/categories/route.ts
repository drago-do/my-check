import { NextResponse } from "next/server";
import { getCategoriesModel } from "@/models/index";

export async function GET(
  request: Request,
  { params }: { params: { entityID: string } }
) {
  try {
    const CategoriesModel = await getCategoriesModel(params.entityID);
    const categories = await CategoriesModel.find();
    return NextResponse.json({
      categories,
    });
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

//Create a new category
export async function POST(
  request: Request,
  { params }: { params: { entityID: string } }
) {
  try {
    const categoryData = await request.json();

    const CategoriesModel = await getCategoriesModel(params.entityID);

    const newCategory = new CategoriesModel(categoryData);

    const response = await newCategory.save();
    return NextResponse.json({
      response,
    });
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
