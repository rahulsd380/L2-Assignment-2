"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
// Calling the products controller function
router.post("/", products_controller_1.ProductsControllers.createProducts);
router.get("/", products_controller_1.ProductsControllers.getAllProducts);
router.get("/:id", products_controller_1.ProductsControllers.getSpecificProduct);
router.put("/:id", products_controller_1.ProductsControllers.updateSpecificProduct);
router.delete("/:id", products_controller_1.ProductsControllers.deleteProduct);
exports.ProductsRoutes = router;
