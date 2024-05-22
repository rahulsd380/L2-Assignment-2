import { Request, Response } from "express";
import { Orders } from "./order.model";
import { TOrders } from "./orders.interface";


// Create new order
const createNewOrder = async(payLoad: TOrders) => {
    const result = await Orders.create(payLoad)
    return result;
}


// get all orders
const getAllOrders = () => {
    const result = Orders.find();
    return result
}

export const orderServices = {
    createNewOrder,
    getAllOrders

}