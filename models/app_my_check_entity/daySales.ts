import mongoose, { Schema, Document } from "mongoose";
import { IOrder } from "./order"; // Asegúrate de ajustar la ruta según tu estructura de archivos

// Define la interfaz para el esquema DaySales
export interface IDaySales extends Document {
  dateTime: Date;
  dayName: string;
  totalSales: number;
  totalOrders: number;
  daySale: IOrder[];
  mostSoldProduct?: string;
  averageOrderValue?: number;
  // Puedes agregar más campos según sea necesario
}

// Define el esquema de ventas diarias
const daySalesSchema: Schema = new Schema(
  {
    dateTime: {
      type: Date,
      required: true,
      default: new Date(),
    },
    dayName: { type: String, required: true },
    totalSales: { type: Number, required: true, default: 0 },
    totalOrders: { type: Number, required: true, default: 0 },
    daySale: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    mostSoldProduct: { type: String, default: "" }, // Opcional, pero puede ser útil
    averageOrderValue: { type: Number, default: 0 }, // Opcional, para análisis adicionales
  },
  {
    timestamps: true,
  }
);

// Exporta el modelo utilizando el esquema daySalesSchema
export default daySalesSchema;
