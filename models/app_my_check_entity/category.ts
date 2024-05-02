import mongoose, { Schema, Document } from "mongoose";
import { Image, IImage } from "./../imageCommon";

// Define la interfaz para el tipo de documento Category
export interface ICategory extends Document {
  name: string;
  description?: string;
  image: IImage;
  parent?: any;
}

// Define el esquema de Mongoose
const categorySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  image: Image,
  parent: { type: Schema.Types.Mixed },
});

// Exporta el modelo utilizando el esquema
export default categorySchema;
