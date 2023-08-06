import {connect, connection} from "mongoose";

const conn = {
  isConnected: false
}

export async function connectDB() {

  if (conn.isConnected) return

  const db = await connect("mongodb+srv://lvasquez0127:30889567@nextjs-crud-cluster.4z7r3g6.mongodb.net/nextjscrud?retryWrites=true&w=majority");
  console.log("database name: ", db.connection.db.databaseName)

  conn.isConnected = db.connections[0].readyState

}

connection.on('connected', () => {
  console.log('Mongodb is connected')
})

connection.on('error', () => {
  console.log('Mongoose connection error')
})
