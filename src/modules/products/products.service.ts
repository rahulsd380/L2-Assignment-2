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
const getSpecificProduct = async (id: string) => {
    // Fetching the product by id from database
    const result = await Products.findById(id);
    return result;
};

// Update specific product by id
const updateSpecificProduct = async (id: string, updatedData: TProducts) => {
    // Find the product by productId and update its data
    const result = await Products.findOneAndUpdate({ _id: id }, updatedData, { new: true });
    return result;
};

export const productServices = {
    createProducts,
    getAllProducts,
    getSpecificProduct,
    updateSpecificProduct,
}