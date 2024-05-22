import express, { Request, Response } from "express";
import { Products } from "./products.model";
import { ProductsControllers } from "./products.controller";

const router = express.Router();


// Calling the products controller function
router.post("/", ProductsControllers.createProducts);
router.get("/", ProductsControllers.getAllMovies);
router.get("/:id", ProductsControllers.getSpecificProduct);
router.put("/:id", ProductsControllers.updateSpecificProduct);

export const ProductsRoutes = router;
