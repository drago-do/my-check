import mongoose, { Schema, Document } from "mongoose";
import Image, { IImage } from "./../imageCommon";

// Define la interfaz para el esquema UnitMeasurementAndPrice
export interface IUnitMeasurementAndPrice extends Document {
  size: number;
  price: number;
  UnitMeasurement:
    | "kg"
    | "g"
    | "l"
    | "ml"
    | "unidad"
    | "oz"
    | "fl oz"
    | "taza"
    | "botella"
    | "shot"
    | "paquete";
}

// Define el esquema para UnitMeasurementAndPrice
const unitMeasurementAndPriceSchema: Schema = new Schema({
  size: { type: Number, required: true },
  price: { type: Number, required: true },
  UnitMeasurement: {
    type: String,
    required: true,
    enum: [
      "kg",
      "g",
      "l",
      "ml",
      "unidad",
      "oz",
      "fl oz",
      "taza",
      "botella",
      "shot",
      "paquete",
    ],
  },
});

// Define la interfaz para el esquema Product
export interface IProduct extends Document {
  name: string;
  description?: string;
  size?: string;
  ingredients?: string[];
  image: IImage;
  UnitMeasurementAndPrice: IUnitMeasurementAndPrice[];
  category?: mongoose.Types.ObjectId;
}

// Define el esquema para Product
const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  size: { type: String },
  ingredients: [{ type: String }],
  image: Image,
  UnitMeasurementAndPrice: [unitMeasurementAndPriceSchema],
  category: { type: Schema.Types.ObjectId, ref: "categories" },
});

// Exporta el modelo utilizando el esquema productSchema
export default productSchema;
