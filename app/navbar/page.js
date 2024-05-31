'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {
  let links= [
    {name:'Home',link:'/'},
    {name:'About',link:'/'},
    {name:'Link',link:'/'},
    {name:'Blog',link:'/'},
    {name:'Services',link:'/'}
  ]
  const [open,setOpen]=useState(false)
  return (
    <div className="w-full fixed top-0 left-0 bg-indigo-500">
      <div className="md:flex md:items-center text-white md:justify-between md:mx-5 ">
        <div className="flex font-serif items-center font-bold md:ml-0 sm:ml-7">
          <span className='text-3xl text-white mr-1 pt-2'><ion-icon name="logo-ionic"></ion-icon></span>
          Umar
        </div>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute top-2 right-4">
        <ion-icon  name={open ? 'close':'menu'}></ion-icon>
        </div>
<ul className="md:flex md:justify-between md:items-center sm:ml-10 ">
  {
    links.map((link)=>(
      <li className="md:ml-9 hover:text-indigo-300 sm:py-3" key={link.name}>
        <Link href={link.link}>{link.name}</Link>
      </li>
    ))
  }
  <button className="bg-indigo-300 px-4 py-1 md:ml-7 rounded-xl hover:scale-105 md:mb-0 sm:mb-3">Sign UP</button>
</ul>
      </div>
    </div>
  )
}
