import { Request, Response } from "express";
import { Orders } from "./order.model";
import { TOrders } from "./orders.interface";

// Create new order
const createNewOrder = async (payLoad: TOrders) => {
  const result = await Orders.create(payLoad);
  return result;
};

// get all orders
const getAllOrders = () => {
  const result = Orders.find();
  return result;
};

//Search product
const searchOrder = async (email: string) => {
  const regex = new RegExp(email, "i");
  const result = await Orders.find({
    $or: [{ email: regex }],
  });
  return result;
};

export const orderServices = {
  createNewOrder,
  getAllOrders,
  searchOrder,
};
