"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const order_model_1 = require("./order.model");
// Create new order
const createNewOrder = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Orders.create(payLoad);
    return result;
});
// get all orders
const getAllOrders = () => {
    const result = order_model_1.Orders.find();
    return result;
};
//Search product
const searchOrder = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(email, "i");
    const result = yield order_model_1.Orders.find({
        $or: [{ email: regex }],
    });
    return result;
});
exports.orderServices = {
    createNewOrder,
    getAllOrders,
    searchOrder,
};
