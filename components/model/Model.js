'use client'
import React, { useState } from 'react';


const Modal = ({ onClose }) => {
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      age: '',
      email: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const fetchData = async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
  
        var raw = JSON.stringify({
          name: formData.name,
          id: parseInt(formData.id), // Assuming id is an integer
          email: formData.email,
          age: parseInt(formData.age), // Assuming age is an integer
        });
  
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };
  
        const response = await fetch('http://localhost:3000/api/students', requestOptions);
        if (response.ok) {
          // alert('Data has been submitted');
          setFormData({ id: '', name: '', age: '', email: '' }); // Clear form fields after successful submission
          onClose(); 
        } else {
          throw new Error('Failed to submit data');
        }
      } catch (error) {
        console.log('error', error);
      }
    };
  
    const handleSave = async () => {
      fetchData();



    };
  
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-lg mx-auto my-6">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Enter Details</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <input
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              name="id"
              value={formData.id}
              placeholder="ID"
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              name="age"
              value={formData.age}
              placeholder="Age"
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded-md shadow outline-none active:bg-blue-600 hover:shadow-lg focus:outline-none"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
