import mongoose from "mongoose";
export default async function connectMongoe(dbURL) {
    try {
        await mongoose.connect(dbURL)
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}