import Button from '@/components/button/Button';
import ShowListButton from '@/components/showListButton/ShowListButton';
import ShowStudents from '@/components/showStudents/ShowStudents';
import React from 'react'

export default function page() {
 
  return (
    <div>
    <h1 className='bg-green-500 text-3xl text-center font-bold py-5'>Student Data</h1>

    <Button title='Add Student Data'/>
    <ShowStudents/>
    </div>
  )
}
