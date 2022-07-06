import express from "express";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import passport from "passport"

const router = express.Router();
const keys = require('./../config/keys.js');


router.post("/register", (req: any, res: any) => {
  User.findOne({
    email: req.body.email,

  })
  .then((user) => {
    if (user) {
      return res.status(400).json({
        email: "Email is already being used"
      })
    } else {
      const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      })
      bcrypt.genSalt(20, (err: any, salt: string) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              const payload = {
                id: user.id,
                name: user.name,
                email: user.email
              };
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer" + token
                  });
                }
              );
            })
            .catch(err => console.log(err))
        });
      })
    }
  })
})


router.post("/login", (req: any, res: any) => {

})



export default router;