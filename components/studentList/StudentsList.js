// StudentList.js
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/students');
        setStudents(response.data.students || []); // Assuming 'students' contains the student data
        console.log('students',students);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [students]);

  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold mb-2">Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id} className="mb-2">
            Name: {student.name}, Email: {student.email}, Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
