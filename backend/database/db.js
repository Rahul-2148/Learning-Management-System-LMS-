import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            // process.env.MONGO_URI
            process.env.MONGO_URI_LOCAL
        );
        console.log('MongoDB Connected');
    } catch (error) {
        console.log("error occured", error); 
    }
}
export default connectDB;