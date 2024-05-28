import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className="bg-green-200 w-full h-10">
            <p className=""> <Link>Umar</Link></p>
            <ul className="flex">
                <p className="">home</p>
                <p className="">about</p>
                <p className="">service</p>
                <p className="">blog</p>
            </ul>
        </div>
      
    </div>
  )
}
