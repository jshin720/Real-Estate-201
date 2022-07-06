import mongoose from "mongoose";
import express from "express";
import users from "./routes/api/users"
import bodyParser from "body-parser";
import passport from "passport";

const app = express();
const db = require('./../config/keys.js').mongoURI;


app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: false
}));

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err: any) => console.log(err));

app.get("/", (req: any, res: any) => res.send("Hello World"));
app.use(bodyParser.json());
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));