'use client'
import React, { useState, useEffect } from 'react';
import { userModel } from '@/src/modal/modal'; // Ensure the correct path to your userModel

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await userModel.find(); // Fetch data using your userModel
        console.log('data', fetchedData);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData(); // Invoke the fetchData function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator while data is being fetched
  }

  if (error) {
    return <p>Error: {error}</p>; // Display an error message if fetching data fails
  }

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">id</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Age</th>
          <th className="border border-gray-300 px-4 py-2">Email</th>
          {/* Add other table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.length > 0 ? (
          data?.map((student, index) => (
            <tr key={index} className="bg-white">
              <td className="border border-gray-300 px-4 py-2">{student.id}</td>
              <td className="border border-gray-300 px-4 py-2">{student.name}</td>
              <td className="border border-gray-300 px-4 py-2">{student.age}</td>
              <td className="border border-gray-300 px-4 py-2">{student.email}</td>
              {/* Add other table cells for additional student data */}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;
