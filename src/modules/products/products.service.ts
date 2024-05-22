import { TProducts } from "./products.interface";
import { Products } from "./products.model";


//Create new product
const createProducts = async(payLoad : TProducts) => {
    // Service is storing the data in database.
    const result = await Products.create(payLoad);
    return result;
};


// Get all products
const getAllProducts = async() => {
    // Fetching all the data from database
    const result = await Products.find();
    return result;
};

export const productServices = {
    createProducts,
    getAllProducts
}