"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ProductsZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name is required" }),
    description: zod_1.z.string(),
    price: zod_1.z
        .number()
        .min(0.01, { message: "Price is required and must be greater than 0" }),
    category: zod_1.z.string().min(1, { message: "Category is required" }),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    })),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number(),
        inStock: zod_1.z.boolean(),
    }),
});
exports.default = ProductsZodSchema;
