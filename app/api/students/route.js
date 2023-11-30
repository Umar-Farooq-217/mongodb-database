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