import { Request, Response } from "express";
import { orderServices } from "./order.service";
import OrdersZodSchema from "./order.validation";

// Create new order
const createNewOrder = async (req: Request, res: Response) => {
  try {
    
    const orderData = req.body;
    const zodValidatedData = OrdersZodSchema.parse(orderData);

    const result = await orderServices.createNewOrder(zodValidatedData);

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Couldn't create product. Please try again!",
    });
  }
};

// Get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    if (email) {
      const result = await orderServices.searchOrder(email.toLowerCase());
      res.json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      // const orderData = req.body;
      const result = await orderServices.getAllOrders();

      res.json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Couldn't fetched data. Please try again!",
    });
  }
};

export const OrderController = {
  createNewOrder,
  getAllOrders,
};