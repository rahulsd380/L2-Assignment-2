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
const getAllMovies = async(req : Request, res: Response) => {
    try{

        //Controller is calling the service function
        const result = await productServices.getAllProducts()
    
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
          });
    }
    catch(error){
        console.log(error);
    }
    

}


// Get all products by id
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


export const ProductsControllers = {
    createProducts,
    getAllMovies,
    getSpecificProduct,
}