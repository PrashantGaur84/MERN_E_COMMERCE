import { Address } from "../Models/Address.js";

// add address
export const addAddress = async (req , res)=>{
    let {fullName , address , city , state , country , pincode , phoneNumber} = req.body;

    let UserAddress = await Address.create({userId:req.user , fullName , address , city , state , country , pincode , phoneNumber});
    res.json({message:"Address added" ,UserAddress ,  success:true});
}

//get first Address of a specific User
export const getAddress = async (req , res)=>{
    let address = await Address.find({userId:req.user}).sort({createdAt:-1});
    res.json({message:'address' ,userAddress:address[0]});
}