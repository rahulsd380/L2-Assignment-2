import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createNewOrder = async(req: Request, res:Response) => {
    const orderData = req.body;
    const result = await orderServices.createNewOrder(orderData);

    res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
}

export const OrderController = {
    createNewOrder,

}