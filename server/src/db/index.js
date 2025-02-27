import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONDODB_URL}/${DB_NAME}`)
        console.log("Monogo Connected || host: ", connectionInstance.connection.host);
    } catch (error) {
        console.log("Mongodb connection FAILED: ", error);
    }
}

export { connectDB }