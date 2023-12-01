// import { userModel } from '../../src/modal/modal';
// import React from 'react'

// export default function page() {

// const fetchdata = async()=>{
//     try {
//         const data = await userModel.find();
//         console.log('data',data);
//         return data
//     } catch (error) {
//         console.log('error',error);
//     }
// }


//   return (
//     <div>
    
//     <h1>Contact Page</h1>

//     {data?.map((item, index)=>{
//         return (
//             <div key={index}>
//                 {item.name} - {item.id}
//             </div>
//         )
//     })}
    
    
    
    
//     </div>
//   )
// }
'use client'
// import { userModel } from '@/src/modal/modal';
// import React, { useState, useEffect } from 'react';

// export default function Page() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fetchedData = await userModel.find();
//         console.log('Fetched Data:', fetchedData);

//         if (Array.isArray(fetchedData)) {
//           setData(fetchedData); // Set the fetched data into the state
//         } else {
//           setError('Data received is not an array.');
//         }
//       } catch (error) {
//         setError(error.message);
//         console.log('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Contact Page</h1>

//       {data.map((item, index) => (
//         <div key={index}>
//           {item.name} - {item.id}
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        setUsers(response.data.products); // Assuming 'products' contains the user data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Name: {user.name}, Email: {user.email}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
