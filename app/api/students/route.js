import { NextResponse } from "next/server"

var users = [
    {
        email: 'umar@gmail.com',
        password: 12344
    },
    {
        email: 'farooq@gmail.com',
        password: 1234
    }
]

export const GET = async () => {
    var body = users
    return NextResponse.json(users)
}




export const POST = async (req) => {
    const body = await req.json()
    body.push(users)
    console.log(users)
    return NextResponse.json({ message: 'post has created' })

}