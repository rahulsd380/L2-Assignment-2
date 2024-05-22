import { Schema, model } from "mongoose";
import { TOrders } from "./orders.interface";

const orderSchema = new Schema<TOrders>({
    email: { type: String, required: true },
    productId: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

export const Orders = model('Orders', orderSchema)