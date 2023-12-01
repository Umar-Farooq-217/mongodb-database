import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    email:String,
    id: {
        type: Number,
        required: true
      },
    age:Number
})
export const userModel = mongoose.models?.students || mongoose.model('students',userSchema)