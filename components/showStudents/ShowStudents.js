'use client'
 import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ShowStudents() {
    const [users, setUsers] = useState([]);
    const [showList, setShowList] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/users');
            setUsers(response.data.products || []); // Assuming 'products' contains the user data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleList = () => {
        setShowList(!showList);
        if (!showList) {
            fetchData();
        }
    };

    useEffect(() => {
        if (showList) {
            fetchData();
        }
    }, [showList]);

    const openUpdateModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    useEffect(() => {
        if (showList) {
            fetchData();
        }
    }, [showList]);


    return (
        <div className="container mx-auto mt-8 px-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={toggleList}
            >
                {showList ? 'Hide Student List' : 'Show Student List'}
            </button>
            {showList && (
                <table className="table-auto w-full">
                    <thead>
                        <tr className='bg-blue-400 hover:bg-blue-500 '>
                            <th className="border   px-4 py-2">Id</th>
                            <th className="border   px-4 py-2">Name</th>
                            <th className="border  px-4 py-2">Email</th>
                            <th className="border  px-4 py-2">Age</th>
                            <th className="border  px-4 py-2">Update</th>
                            <th className="border  px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr className='bg-green-300 hover:bg-green-400' key={user._id}>
                                <td className=" border px-4 py-2">{user.id}</td>
                                <td className=" border px-4 py-2">{user.name}</td>
                                <td className=" border px-4 py-2">{user.email}</td>
                                <td className=" border px-4 py-2">{user.age}</td>
                                <td className=" border px-4 py-2"><button className='my-1 mx-2 hover:bg-red-600 py-2 px-2 rounded bg-red-400 ' onClick={() => openUpdateModal(user)}>Update</button></td>
                                <td className=" border px-4 py-2"><button className='my-1 mx-2 hover:bg-red-600 py-2 px-2 rounded bg-red-400'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            
            
         

        </div>
    );
}

// <ul>
//                     {users.map((user) => (
//                         <li key={user._id} className="mb-2">
//                             <p className="text-lg font-semibold">Name: {user.name}</p>
//                             <p>Email: {user.email}</p>
//                             <p>Age: {user.age}</p>
//                         </li>
//                     ))}
//                 </ul>