"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
const keys = require('./../config/keys.js');
router.post("/register", (req, res) => {
    User_1.default.findOne({
        email: req.body.email,
    })
        .then((user) => {
        if (user) {
            return res.status(400).json({
                email: "Email is already being used"
            });
        }
        else {
            const newUser = new User_1.default({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email
            });
            bcryptjs_1.default.genSalt(20, (err, salt) => {
                bcryptjs_1.default.hash(newUser.password, salt, (err, hash) => {
                    if (err)
                        throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        };
                        jsonwebtoken_1.default.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer" + token
                            });
                        });
                    })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});
router.post("/login", (req, res) => {
});
exports.default = router;
