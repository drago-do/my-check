import mongoose, { Schema, Document } from "mongoose";

// Define la interfaz para los productos de una orden
export interface IProductOfOrder extends Document {
  product: mongoose.Types.ObjectId;
  addedAT: Date;
  addedBy: mongoose.Types.ObjectId;
  deliver: boolean;
  paid: boolean;
  comments?: string;
  UnitMeasurementAndPrice: {
    size: number;
    price: number;
    UnitMeasurement: string;
  };
}

// Define el esquema de productos de una orden
const productOfOrderSchema: Schema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "products" },
  addedAT: { type: Date, default: new Date() },
  addedBy: { type: Schema.Types.ObjectId, ref: "users" },
  deliver: { type: Boolean, default: false },
  paid: { type: Boolean, default: false },
  comments: { type: String },
  UnitMeasurementAndPrice: {
    size: { type: Number, require: true },
    price: { type: Number, require: true },
    UnitMeasurement: { type: String, require: true },
  },
});

// Define la interfaz para una orden
export interface IOrder extends Document {
  id: string;
  madeBy: mongoose.Types.ObjectId;
  orderName: string;
  location: {
    mapName: string;
    position: string[];
  };
  creationDate?: string;
  products: IProductOfOrder[];
  total: number;
}

// Define el esquema de una orden
const orderSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    madeBy: { type: Schema.Types.ObjectId, ref: "users" },
    orderName: { type: String, required: true },
    location: {
      mapName: { type: String, required: true },
      position: [{ type: String, required: true }],
    },
    creationDate: { type: String },
    products: [{ type: productOfOrderSchema }],
    total: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Exporta el modelo utilizando el esquema de orden
export default orderSchema;
