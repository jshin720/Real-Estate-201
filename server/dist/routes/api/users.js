"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const keys = require('./../config/keys.js');
router.post("/register", (req, res) => {
});
router.post("/login", (req, res) => {
});
exports.default = router;
