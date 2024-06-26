import { Request, Response } from "express";
import { orderServices } from "./order.service";
import OrdersZodSchema from "./order.validation";
import { productServices } from "../products/products.service";

// Create new order
const createNewOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodValidatedData = OrdersZodSchema.parse(orderData);

    // Find the product by productId
    const product = await productServices.getSpecificProduct(zodValidatedData.productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Checking the quantity here
    if (product.inventory.quantity < zodValidatedData.quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient product quantity",
      });
    }

    const result = await orderServices.createNewOrder(zodValidatedData);

    // Reduce the product quantity in the products collection
    product.inventory.quantity -= zodValidatedData.quantity;

    // Check if quantity is zero and update inStock field
    if (product.inventory.quantity === 0) {
      product.inventory.inStock = false;
    }

    await product.save();

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Couldn't create order. Please try again!",
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