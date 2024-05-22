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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsControllers = void 0;
const products_service_1 = require("./products.service");
const products_validation_1 = __importDefault(require("./products.validation"));
// Create produst
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productsData = req.body;
        const zodValidatedData = products_validation_1.default.parse(productsData);
        //Controller is calling the service function
        const result = yield products_service_1.productServices.createProducts(zodValidatedData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create the product. Please check your inputs and try again.",
        });
    }
});
// Get all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        if (searchTerm) {
            // Controller is calling the service function to search products
            const result = yield products_service_1.productServices.searchProducts(searchTerm.toLowerCase());
            res.json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        else {
            // Controller is calling the service function to get all products
            const result = yield products_service_1.productServices.getAllProducts();
            res.json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to retrieve the specific product. Please try again!",
        });
    }
});
// Get specific products by id
const getSpecificProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        // Controller is calling the service function
        const result = yield products_service_1.productServices.getSpecificProduct(productId);
        if (!result) {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to retrieve the specific product. Please ensure your inputs are correct and try again.",
        });
    }
});
// Update specific products by id
const updateSpecificProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const updatedData = req.body;
        // Controller is calling the service function
        const result = yield products_service_1.productServices.updateSpecificProduct(productId, updatedData);
        if (!result) {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update the product. Please check your input and try again.",
        });
    }
});
// Delete specific products by id
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const result = yield products_service_1.productServices.deleteProduct(productId);
        if (!result) {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to delete the product.",
        });
    }
});
exports.ProductsControllers = {
    createProducts,
    getAllProducts,
    getSpecificProduct,
    updateSpecificProduct,
    deleteProduct,
};
