// mongodb.ts
import mongoose, { Connection } from "mongoose";

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST } = process.env;

if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_HOST) {
  throw new Error("Please define the MongoDB environment variables.");
}

interface IDbConnections {
  [key: string]: Connection;
}

const dbConnections: IDbConnections = {};

export const connect = async (dbName = "App_MyCheck"): Promise<Connection> => {
  if (dbConnections[dbName]) {
    console.log(`Reusing connection to ${dbName} in MongoDB`);
    return dbConnections[dbName];
  }

  const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${dbName}?retryWrites=true&w=majority`;
  console.log(`Creating new connection to ${dbName} in MongoDB`);

  const dbConnection = await mongoose.createConnection(uri);
  dbConnections[dbName] = dbConnection;

  console.log(`Connected to ${dbName} in MongoDB`);
  return dbConnection;
};
