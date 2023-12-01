'use client'
import { userModel } from '@/src/modal/modal';
import React,{useState} from 'react'
import Button from '../button/Button';
import TableComponent from '../../components/tableComponent/TableComponent'

export default function ShowButton() {
    const [students, setStudents] = useState([]);

    // const fetchStudents = async () => {
    //     try {
    //       const response = await fetch('http://localhost:3000/api/students');
    //       if (response.ok) {
    //         const students = await response.json();
    //         setStudentsData(students);
    //       } else {
    //         throw new Error('Failed to fetch data');
    //       }
    //     } catch (error) {
    //       console.log('Error fetching students:', error);
    //     }
    //   };

    // const sampleData = [
    //     { name: 'John Doe', age: 30, email: 'john@example.com' ,id:2},
    //     { name: 'Jane Smith', age: 25, email: 'jane@example.com',id:3 },
    //     // Add more data as needed
    //   ];

const fetchStudents = async()=>{
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "name": "Umar ",
          "id": 6,
          "email": "123 Main St",
          "age": 23
        });
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        const response = await fetch('http://localhost:3000/api/students', requestOptions);
      if (response.ok) {
        const studentsData = await response.json();
        console.log('StudentData',studentsData);
        setStudents(studentsData);
    } }catch (error) {
        console.log('error',error);
    }
}
 const showStudents = ()=>{
    fetchStudents()
 }






  return (
    <div className='bg-green-400'>

    <button
    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150
     ease-linear bg-blue-500 rounded-md shadow outline-none active:bg-blue-600 hover:shadow-lg focus:outline-none"
    onClick={showStudents}>Show Students</button>
    <TableComponent  data={students}/>

    </div>
  )
}
