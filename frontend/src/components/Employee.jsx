import React, { useState } from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "Sanju Mohanta",
      image: "",
      email: "Sanjumohanta@gmail.com",
      address: "Fulbari",
      salary: "100",
    },
  ]);
  return (
    <div className="px-5 mt-5">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.image}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
              <td>{data.salary}</td>
              <td>
                <button className="btn btn-info mx-2 ">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
