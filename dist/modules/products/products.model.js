"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: [
        {
            type: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
    inventory: {
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: true },
    },
});
exports.Products = (0, mongoose_1.model)("Products", productsSchema);
