import mongoose from "mongoose";

const connection = {

}


async function dbConnect(){
    if(connection.isConnected){
        return
    }

    const db = await mongoose.connect(process.env.MONGOOSE)
    


}