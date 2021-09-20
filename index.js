import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import messageRoutes from "./routes/messages.js";
import dotenv from "dotenv";

//app config
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//app middlewares
app.use(express.json());
app.use(cors());
app.use("/messages", messageRoutes);

//db config
const db_admin_name = process.env.DB_ADMIN_NAME;
const db_admin_key = process.env.DB_ADMIN_KEY;
const db_name = process.env.DB_NAME;
const connection_url = `mongodb+srv://${db_admin_name}:${db_admin_key}@cluster0.rbdkv.mongodb.net/${db_name}?retryWrites=true&w=majority`;

mongoose
  .connect(connection_url)
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((err) => {
    console.log("Error connecting to DB " + err.message);
  });

//api routes

//listen port
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
