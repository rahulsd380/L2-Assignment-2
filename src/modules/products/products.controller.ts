import { Request, Response } from "express";
import { productServices } from "./products.service";

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


export const ProductsControllers = {
    createProducts,
    getAllMovies,
}