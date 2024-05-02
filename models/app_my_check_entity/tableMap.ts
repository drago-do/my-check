import mongoose, { Schema, Document } from "mongoose";
import Image, { IImage } from "./../imageCommon";

// Define la interfaz para el esquema TableMap
export interface ITableMap extends Document {
  _id: string;
  name: string;
  description: string;
  totalTables: number;
  image: IImage;
  creationDate: Date;
  updateDate: Date;
}

// Define el esquema para TableMap
const tableMapSchema: Schema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  totalTables: { type: Number, required: true },
  image: { type: Image, required: true },
  creationDate: { type: Date, required: true, default: Date.now },
  updateDate: { type: Date, required: true, default: Date.now },
});

// Exporta el modelo utilizando el esquema tableMapSchema
export default tableMapSchema;
