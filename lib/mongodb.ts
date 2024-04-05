import mongoose from "mongoose";

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST } = process.env;

if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_HOST) {
  throw new Error("Please define the MongoDB environment variables.");
}

// Define una interfaz para el objeto de conexiones
interface IDbConnections {
  [key: string]: mongoose.Connection;
}

const dbConnections: IDbConnections = {};

export const connect = async (dbName = "App_MyCheck") => {
  const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${dbName}?retryWrites=true&w=majority`;

  // Verifica si ya existe una conexión activa con esta URI
  if (dbConnections[uri]) {
    console.log(`Reusing connection to ${dbName} in MongoDB`);
    return dbConnections[uri].db;
  }

  console.log(`Creating new connection to ${dbName} in MongoDB`);

  try {
    const dbConnection = await mongoose.createConnection(uri);
    //Espera a que la conexión se complete
    dbConnections[uri] = dbConnection; // Caché la conexión
    console.log(`Connected to ${dbName} in MongoDB`);
    return Promise.resolve(dbConnection);
  } catch (error) {
    console.error(error);
    Promise.resolve(false);
    throw new Error("Failed to connect to MongoDB");
  }
};
