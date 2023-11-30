
import React from 'react';
import styles from '../../styles/Table.module.css'; // Import CSS module

const TableComponent = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
    
      <table className={styles.table}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
