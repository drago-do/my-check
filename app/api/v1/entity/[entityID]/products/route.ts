import { NextResponse } from "next/server";
import { getProductModel } from "@/models/index";

//Get All products
export async function GET(
  request: Request,
  { params }: { params: { entityID: string } }
) {
  try {
    const ProductsModel = await getProductModel(params.entityID);
    const products = await ProductsModel.find();
    return NextResponse.json({
      products,
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

//Create a new product
export async function POST(
  request: Request,
  { params }: { params: { entityID: string } }
) {
  try {
    const productData = await request.json();

    const ProductsModel = await getProductModel(params.entityID);

    const newCategory = new ProductsModel(productData);

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
