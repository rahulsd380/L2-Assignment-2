import express, { Request, Response } from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.createNewOrder);

export const OrderRoutes = router;