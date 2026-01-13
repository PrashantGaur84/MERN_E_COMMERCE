import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js';
import addressRouter from './Routes/address.js'
import paymentRouter from './Routes/payment.js'
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DB_String , {
    dbName:"E_Commerce"
}).then(()=>console.log("MongoDB Connected Successfully")).catch((err)=>console.log(err));


const app = express();
app.use(express.json());

app.use(cors({
    origin:true,
    methods:["GET" , "POST" , "PUT" , "DELETE"],
    credentials:true,
}))

// home route
app.get('get' , (req , res)=>{
    res.json({message:'This is home route'});
})

// User Router
app.use('/api/user' , userRouter);

// Product Router
app.use('/api/product' , productRouter);

// cart Router
app.use('/api/cart' , cartRouter);

// address router
app.use('/api/address' , addressRouter);

// payment router
app.use('/api/payment' , paymentRouter);

const port = 3000;

app.listen(port , ()=>console.log(`Server is running on port http://localhost:${port}`));
