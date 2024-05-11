// models/index.ts
import { connect } from "@/lib/mongodb"; // Importando la función connect del archivo mongodb.ts
import userSchema from "./user";
import businessSchema from "./business";
import categorySchema from "./app_my_check_entity/category";

export const getUserModel = async () => {
  const dbName = "App_MyCheck"; // Define el nombre de la DB para el modelo Usuario
  const connection = await connect(dbName);
  return connection.model("User", userSchema);
};

export const getBusinessModel = async () => {
  const dbName = "App_MyCheck"; // Define el nombre de la DB para el modelo Business
  const connection = await connect(dbName);
  return connection.model("Business", businessSchema);
};

// // Por ejemplo, para un modelo "Order" que se conecta a diferentes DBs
// export const getOrderModel = async (dbName) => {
//   const connection = await connect(dbName); // Pasas el nombre de la DB como argumento
//   return connection.model("Order", orderSchema); // Asegúrate de tener un orderSchema definido
// };

//getCategoriesModel
export const getCategoriesModel = async (dbName: string) => {
  const connection = await connect(dbName);
  return connection.model("Category", categorySchema);
};
