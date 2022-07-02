import express from "express";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import passport from "passport"

const router = express.Router();
const keys = require('./../config/keys.js');


router.post("/register", (req: any, res: any) => {

})


router.post("/login", (req: any, res: any) => {

})



export default router;