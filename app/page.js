import Modal from '@/components/model/Model';
import TableComponent from '@/components/tableComponent/TableComponent'
import React from 'react'

export default function page() {
  const sampleData = [
    { name: 'John Doe', age: 30, email: 'john@example.com' ,id:2},
    { name: 'Jane Smith', age: 25, email: 'jane@example.com',id:3 },
    // Add more data as needed
  ];
  return (
    <div>
    <h1 className='bg-green-500 text-3xl text-center font-bold py-5'>Student Data</h1>

    <TableComponent data={sampleData}/>
    <Modal/>
    </div>
  )
}
