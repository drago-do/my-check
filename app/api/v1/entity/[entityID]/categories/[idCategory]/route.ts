import { NextResponse } from "next/server";
import { getCategoriesModel } from "@/models/index";

export async function GET(
  request: Request,
  { params }: { params: { entityID: string; idCategory: string } }
) {
  try {
    const CategoriesModel = await getCategoriesModel(params.entityID);
    const categories = await CategoriesModel.findById(
      params.idCategory
    ).populate("parent");
    return NextResponse.json({
      _id: categories?._id,
      name: categories?.name,
      description: categories?.description,
      image: categories?.image,
      parent: categories?.parent,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
}

// Update an existing category
export async function PUT(
  request: Request,
  { params }: { params: { entityID: string; idCategory: string } }
) {
  try {
    const categoryData = await request.json();

    const CategoriesModel = await getCategoriesModel(params.entityID);

    const response = await CategoriesModel.findByIdAndUpdate(
      params.idCategory,
      categoryData,
      { new: true } // Esta opción devuelve el documento modificado en lugar del original
    );

    if (!response) {
      return NextResponse.json({
        error: "Category not found",
      });
    }

    return NextResponse.json({
      _id: response?._id,
      name: response?.name,
      description: response?.description,
      image: response?.image,
      parent: response?.parent,
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

// Delete an existing category
export async function DELETE(
  request: Request,
  { params }: { params: { entityID: string; idCategory: string } }
) {
  try {
    const CategoriesModel = await getCategoriesModel(params.entityID);

    const response = await CategoriesModel.findByIdAndDelete(params.idCategory);

    if (!response) {
      return NextResponse.json(
        {
          error: "Category not found",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      message: "Category deleted successfully",
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
