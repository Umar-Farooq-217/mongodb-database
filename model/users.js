import { userModel } from "@/src/modal/modal";
import mongoose from "mongoose";
const {Schema} = mongoose;
 
const userSchema = new Schema({
    email:{type:email,required:true},
    password:{type:password,required:true}
})

export const  userModel = mongoose.models?.bestUsers || mongoose.model('bestUsers',userSchema)