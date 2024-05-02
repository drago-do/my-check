import { Schema, Document, model } from "mongoose";

// Interfaz para el documento de la base de datos
export interface IImage extends Document {
  data: Buffer;
  contentType: string;
  url: boolean;
  link: string;
}

// Esquema para el documento de la base de datos
const Image = new Schema<IImage>({
  data: {
    type: Buffer,
    default: "",
  },
  contentType: {
    type: String,
    default: "",
  },
  url: {
    type: Boolean,
    default: true,
  },
  link: {
    type: String,
    default: "/defaultProfile.jpg",
  },
});

// Exportar el esquema como modelo
export default Image;
