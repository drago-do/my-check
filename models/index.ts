// models/index.ts
import { connect } from "@/lib/mongodb"; // Importando la función connect del archivo mongodb.ts
import userSchema from "./user"; // Asume que userSchema está definido en otro archivo

export const getUserModel = async () => {
  const dbName = "App_MyCheck"; // Define el nombre de la DB para el modelo Usuario
  const connection = await connect(dbName);
  return connection.model("User", userSchema);
};

// // Por ejemplo, para un modelo "Order" que se conecta a diferentes DBs
// export const getOrderModel = async (dbName) => {
//   const connection = await connect(dbName); // Pasas el nombre de la DB como argumento
//   return connection.model("Order", orderSchema); // Asegúrate de tener un orderSchema definido
// };
