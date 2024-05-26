import { Schema, Document, model } from "mongoose";

// Interfaz para el documento de la base de datos
export interface IImage extends Document {
  data: String;
  contentType: string;
  url: boolean;
  link: string;
}

// Esquema para el documento de la base de datos
const Image = new Schema<IImage>({
  data: {
    type: String,
    default: "",
  },
  contentType: {
    type: String,
    default: "online",
  },
});

// Exportar el esquema como modelo
export default Image;
