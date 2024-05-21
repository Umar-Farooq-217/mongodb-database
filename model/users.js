import mongoose from "mongoose";
const {Schema} = mongoose;
 
const userSchema = new Schema({
    email:{type:String,required:true},
    password:{type:Number,required:true}
})

export const  userModel = mongoose.models?.bestUsers || mongoose.model('bestUsers',userSchema)