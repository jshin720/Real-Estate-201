"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const listingSchema = new mongoose_1.Schema({
    category: {
        type: String,
        enum: ["rent", "home"],
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    address: [{
            type: String,
            required: true,
            unique: true
        }],
    gallery: [{
            type: String,
            // ref:
        }],
    description: {
        type: String,
        required: true
        // ref:
    },
    features: [{
            type: String,
            required: true
        }]
});
exports.default = (0, mongoose_1.model)('Listing', listingSchema);
