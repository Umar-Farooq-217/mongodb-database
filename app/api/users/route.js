import dbConnect from "@/src/config/db"
import { userModel } from "@/src/modal/modal"
import { NextResponse } from "next/server"


dbConnect()



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