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

// Get specific product by id
const getSpecificProduct = async (productId: string) => {
    // Fetching the product by id from database
    const result = await Products.findOne({productId});
    return result;
};

export const productServices = {
    createProducts,
    getAllProducts,
    getSpecificProduct,
}