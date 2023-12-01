import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    email:{
      type: String,
      required: true
    },
    id: {
        type: Number,
        required: true
      },
    age:{
      type: Number,
      required: true
    }
})
export const userModel = mongoose.models?.students || mongoose.model('students',userSchema)