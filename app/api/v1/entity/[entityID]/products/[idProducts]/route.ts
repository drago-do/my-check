import { NextResponse } from "next/server";
import { getCategoriesModel, getProductModel } from "@/models/index";

export async function GET(
  request: Request,
  { params }: { params: { entityID: string; idProducts: string } }
) {
  try {
    //Registrar el modelo de categorías para poder hacer la consulta con populate
    const CategoriesModel = await getCategoriesModel(params.entityID);
    const ProductsModel = await getProductModel(params.entityID);
    const product = await ProductsModel.findById(params.idProducts).populate({
      path: "category",
      model: CategoriesModel,
    });
    return NextResponse.json({
      _id: product?._id,
      name: product?.name,
      description: product?.description,
      size: product?.size,
      ingredients: product?.ingredients,
      image: product?.image,
      UnitMeasurementAndPrice: product?.UnitMeasurementAndPrice,
      category: product?.category,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}

// Update an existing product
export async function PUT(
  request: Request,
  { params }: { params: { entityID: string; idProducts: string } }
) {
  try {
    const productData = await request.json();

    const ProductsModel = await getProductModel(params.entityID);

    const product = await ProductsModel.findByIdAndUpdate(
      params.idProducts,
      productData,
      { new: true } // Esta opción devuelve el documento modificado en lugar del original
    );

    if (!product) {
      return NextResponse.json({
        error: "Product not found",
      });
    }

    return NextResponse.json({
      _id: product?._id,
      name: product?.name,
      description: product?.description,
      size: product?.size,
      ingredients: product?.ingredients,
      image: product?.image,
      UnitMeasurementAndPrice: product?.UnitMeasurementAndPrice,
      parent: product?.parent,
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

// Delete an existing product
export async function DELETE(
  request: Request,
  { params }: { params: { entityID: string; idProducts: string } }
) {
  try {
    const ProductsModel = await getProductModel(params.entityID);

    const response = await ProductsModel.findByIdAndDelete(params.idProducts);

    if (!response) {
      return NextResponse.json(
        {
          error: "product not found",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      message: "Product deleted successfully",
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
