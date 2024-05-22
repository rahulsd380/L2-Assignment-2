import { Request, Response } from "express";
import { productServices } from "./products.service";


// Create produst
const createProducts = async(req : Request, res: Response) => {
    const productsData = req.body;

    //Controller is calling the service function
    const result = await productServices.createProducts(productsData)

    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
      });

}


// Get all products
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string;

        if (searchTerm) {
            // Controller is calling the service function to search products
            const result = await productServices.searchProducts(searchTerm.toLowerCase());
            res.json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        } else {
            // Controller is calling the service function to get all products
            const result = await productServices.getAllProducts();
            res.json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


// Get specific products by id
const getSpecificProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        // Controller is calling the service function
        const result = await productServices.getSpecificProduct(productId);
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
    } catch (error) {
        console.log(error);
    }
};


// Update specific products by id
const updateSpecificProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        const updatedData = req.body;
        // Controller is calling the service function
        const result = await productServices.updateSpecificProduct(productId, updatedData);
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
    } catch (error) {
        console.log(error);
    }
};

// Delete specific products by id
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        const result = await productServices.deleteProduct(productId);
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
    } catch (error) {
        console.log(error);
    }
};


export const ProductsControllers = {
    createProducts,
    getAllProducts,
    getSpecificProduct,
    updateSpecificProduct,
    deleteProduct,
}