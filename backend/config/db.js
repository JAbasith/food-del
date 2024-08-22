import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatestack:33858627@cluster0.6sv2f.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}