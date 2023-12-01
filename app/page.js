import Button from '@/components/button/Button';
import Modal from '@/components/model/Model';
import ShowButton from '@/components/showButton/ShowButton';
import TableComponent from '@/components/tableComponent/TableComponent'
import React from 'react'

export default function page() {
 
  return (
    <div>
    <h1 className='bg-green-500 text-3xl text-center font-bold py-5'>Student Data</h1>

    <Button title='Add Student Data'/>
    <ShowButton/>
   
    </div>
  )
}
