import dbConnect from "@/src/config/db"
import { userModel } from "@/src/modal/modal"
import { NextResponse } from "next/server"


dbConnect()







export const POST = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body)

        // database
        const product = new userModel(body)
            await product.save()
        return NextResponse.json({ message: "successfully product created" })


    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)
        })
    }
}



export const GET = async () => {
    try {
      // Fetch all products from the database
      const products = await userModel.find({});
  
      return NextResponse.json({ products });
    } catch (error) {
      return NextResponse.json({
        message: "Error fetching products",
        error: JSON.stringify(error),
      });
    }
  };


  export const DELETE = async(req)=>{
   try {
    const body = await req.json();
    console.log('body',body);
    if(user.id){
      await userModel.deleteOne({
        id:user.id
      })
      return NextResponse.json({ message: "successfully product deleted" })
    
    }
   } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: JSON.stringify(error)
  })
   }


  }