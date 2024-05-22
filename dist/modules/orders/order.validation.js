"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const OrdersZodSchema = zod_1.z.object({
    email: zod_1.z.string().min(1, { message: "Email is required" }),
    productId: zod_1.z.string().min(1, { message: "Product ID is required" }),
    price: zod_1.z.number(),
    quantity: zod_1.z.number().min(1, { message: "Quantity is required" }),
});
exports.default = OrdersZodSchema;
