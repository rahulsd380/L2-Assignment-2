import { Request, Response } from "express";
import { Orders } from "./order.model";
import { TOrders } from "./orders.interface";

const createNewOrder = async(payLoad: TOrders) => {
    const result = await Orders.create(payLoad)
    return result;
}

export const orderServices = {
    createNewOrder,

}