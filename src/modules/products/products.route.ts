import express, { Request, Response } from "express";
import { Products } from "./products.model";
import { ProductsControllers } from "./products.controller";

const router = express.Router();

// Calling the products controller function
router.post("/", ProductsControllers.createProducts);
router.get("/", ProductsControllers.getAllProducts);
router.get("/:id", ProductsControllers.getSpecificProduct);
router.put("/:id", ProductsControllers.updateSpecificProduct);
router.delete("/:id", ProductsControllers.deleteProduct);

export const ProductsRoutes = router;
