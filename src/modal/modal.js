import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name:String,
    email:String,
    id:Number,
    age:Number
})
export const userModel = mongoose.models?.students || mongoose.model('students',userSchema)