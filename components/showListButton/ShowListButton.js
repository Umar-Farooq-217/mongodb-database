
'use client'
import React, { useState } from 'react';
import StudentList from '../studentList/StudentsList';

const ShowListButton = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="my-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleList}
      >
        {showList ? 'Hide Students' : 'Show Students'}
      </button>
      {showList && <StudentList />}
    </div>
  );
};

export default ShowListButton;
