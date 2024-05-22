import { Request, Response } from "express";
import { productServices } from "./products.service";
import ProductsZodSchema from "./products.validation";

// Create produst
const createProducts = async (req: Request, res: Response) => {
  try {
    const productsData = req.body;

    const zodValidatedData = ProductsZodSchema.parse(productsData);

    //Controller is calling the service function
    const result = await productServices.createProducts(zodValidatedData);

    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message:
        "Failed to create the product. Please check your inputs and try again.",
    });
  }
};

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;

    if (searchTerm) {
      // Controller is calling the service function to search products
      const result = await productServices.searchProducts(
        searchTerm.toLowerCase()
      );
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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to retrieve the specific product. Please try again!",
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
    res.status(400).json({
      success: false,
      message:
        "Failed to retrieve the specific product. Please ensure your inputs are correct and try again.",
    });
  }
};

// Update specific products by id
const updateSpecificProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;
    // Controller is calling the service function
    const result = await productServices.updateSpecificProduct(
      productId,
      updatedData
    );
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
    res.status(400).json({
      success: false,
      message:
        "Failed to update the product. Please check your input and try again.",
    });
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
    res.status(400).json({
      success: false,
      message: "Failed to delete the product.",
    });
  }
};

export const ProductsControllers = {
  createProducts,
  getAllProducts,
  getSpecificProduct,
  updateSpecificProduct,
  deleteProduct,
};
