import { Schema, model } from "mongoose";
import { TProducts } from "./products.interface";

const productsSchema = new Schema<TProducts>({
    productId: {type : String},
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: [
        {
            type: { type: String, required: true },
            value: { type: String, required: true }
        }
    ],
    inventory: {
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: true }
    }
});

export const Products = model('Products', productsSchema)