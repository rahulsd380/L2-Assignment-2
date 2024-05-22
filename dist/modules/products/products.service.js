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
exports.productServices = void 0;
const products_model_1 = require("./products.model");
//Create new product
const createProducts = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    // Service is storing the data in database.
    const result = yield products_model_1.Products.create(payLoad);
    return result;
});
// Get all products
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    // Fetching all the data from database
    const result = yield products_model_1.Products.find();
    return result;
});
// Get specific product by id
const getSpecificProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetching the product by id from database
    const result = yield products_model_1.Products.findById(id);
    return result;
});
// Update specific product by id
const updateSpecificProduct = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    // Find the product by productId and update it's data
    const result = yield products_model_1.Products.findOneAndUpdate({ _id: id }, updatedData, {
        new: true,
    });
    return result;
});
// Delete specific product by id
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.findByIdAndDelete(id);
    return result;
});
//Search product
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, "i");
    const result = yield products_model_1.Products.find({
        $or: [
            { name: regex },
            { description: regex },
            { category: regex },
            { tags: regex },
        ],
    });
    return result;
});
exports.productServices = {
    createProducts,
    getAllProducts,
    getSpecificProduct,
    updateSpecificProduct,
    deleteProduct,
    searchProducts,
};
