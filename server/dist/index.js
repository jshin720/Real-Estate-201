"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/api/users"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const app = (0, express_1.default)();
const db = require('./../config/keys.js').mongoURI;
app.use(passport_1.default.initialize());
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
mongoose_1.default
    .connect(db)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));
app.get("/", (req, res) => res.send("Hello World"));
app.use(body_parser_1.default.json());
app.use("/api/users", users_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
