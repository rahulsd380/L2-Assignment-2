import { Request, Response } from "express";
import { orderServices } from "./order.service";
import { productServices } from "../products/products.service";
import OrdersZodSchema from "./order.validation";


// Create new order
const createNewOrder = async(req: Request, res:Response) => {

    
    const orderData = req.body;
    const zodValidatedData = OrdersZodSchema.parse(orderData);
    
    const result = await orderServices.createNewOrder(zodValidatedData);

    res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
}

// Get all orders
const getAllOrders = async(req: Request, res:Response) => {
    const email = req.query.email as string;

    if(email){
        const result = await orderServices.searchOrder(email.toLowerCase());
        res.json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: result,
        });
    } else{
        const orderData = req.body;
        const result = await orderServices.createNewOrder(orderData);
    
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
          });
    }
}

export const OrderController = {
    createNewOrder,
    getAllOrders,

}