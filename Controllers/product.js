import { Products } from "../Models/product.js";

// add Product
export const addProduct = async (req , res)=>{
    const {title , description , price , category , qty , imgSrc} = req.body;
    try {
        let product = await Products.create({
            title ,
            description ,
            price ,
            category ,
            qty ,
            imgSrc ,
        });
        res.json({message:"Product added successfully...!" , product});
    } catch (error) {
        res.json(error.message);
    }
}

// get product
export const getProducts = async(req , res)=>{
    try {
        let products = await Products.find().sort({created:-1});
        return res.json({message:"All Products" , products});
    } catch (error) {
        res.json(error.message);
    }
}

// find product bt id
export const getProductById = async(req , res)=>{
    const id = req.params.id;
    try {
        let product = await Products.findById(id);
        if(!product){
            return res.json({message:"Invalid ID" , success:false});
        }
        return res.json({message:"Specific Product" , product});
    } catch (error) {
        res.json(error.message);
    }
}

// update product
export const updtaeProductById = async(req , res)=>{
    const id = req.params.id;
    try {
        let product = await Products.findByIdAndUpdate(id , req.body , {new:true});
        if(!product){
            return res.json({message:"Invalid ID" , success:false});
        }
        return res.json({message:"Product has been updated" , product});
    } catch (error) {
        res.json(error.message);
    }
}

// delete product by id
export const deleteProductById = async(req , res)=>{
    try {
        const id = req.params.id;
        let product = await Products.findOneAndDelete(id);
        if(!product){
            return res,json({message:"Invalid ID"});
        }
        res.json({message:"Product has been deleted" , product , success:false});
    } catch (error) {
        res.json(error.message);
    }
}