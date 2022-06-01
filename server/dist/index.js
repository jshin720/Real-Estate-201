"use strict";
var express = require("express");
var app = express();
var db = require('./../config/keys.js').mongoURI;
var mongoose = require('mongoose');
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(function () { return console.log("Connected to MongoDB successfully"); })
    .catch(function (err) { return console.log(err); });
app.get("/", function (req, res) { return res.send("Hello World"); });
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("Server is running on port ".concat(port)); });
