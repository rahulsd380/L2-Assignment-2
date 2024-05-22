import { Request, Response } from "express";
import { orderServices } from "./order.service";
import { productServices } from "../products/products.service";


// Create new order
const createNewOrder = async(req: Request, res:Response) => {
    const orderData = req.body;
    const result = await orderServices.createNewOrder(orderData);

    res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
}


// Get all orders
const getAllOrders = async(req: Request, res:Response) => {
 const result = await orderServices.getAllOrders();
 
 res.json({
    success: true,
    message: "Orders fetched successfully!",
    data: result,
  });
}

export const OrderController = {
    createNewOrder,
    getAllOrders,

}