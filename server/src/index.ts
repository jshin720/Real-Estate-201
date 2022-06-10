import mongoose from "mongoose";
import express from "express";
const app = express();
const db = require('./../config/keys.js').mongoURI;



mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err: any) => console.log(err));


app.get("/", (req: any, res: any) => res.send("Hello World"));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));