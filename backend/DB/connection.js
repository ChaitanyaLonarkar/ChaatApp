import mongoose from "mongoose";

const connectDb=async ()=>{
    try {
        mongoose.connect(process.env.CONNECTION_URL)
        console.log("connect")

    } catch (error) {
        console.log("error hai ",error)
    }
}
 export default connectDb;