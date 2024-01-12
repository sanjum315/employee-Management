import React, { useState } from "react";

const Home = () => {
  const [adminData, setAdminData] = useState([
    {
      email: "sanjumohanta@gmail.com",
      id: "2",
    },
    {
      email: "rahulsarkar@gmail.com",
      id: "1",
    },
  ]);
  return (
    <div>
      <div className="p-2 mt-3 d-flex justify-content-around">
        <div className="w-25 border rounded p-2 shadow">
          <div className="text-center">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-around">
            <h5>Total: </h5>
            <h5>0</h5>
          </div>
        </div>
        <div className="w-25 border rounded p-2 shadow">
          <div className="text-center">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-around">
            <h5>Total: </h5>
            <h5>0</h5>
          </div>
        </div>
        <div className="w-25 border rounded p-2 shadow">
          <div className="text-center">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-around">
            <h5>Total: </h5>
            <h5>0</h5>
          </div>
        </div>
      </div>
      <div className="p-4 mt-2">
        <h3>List of Admins</h3>
        <table className="table w-50">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adminData.map((e) => (
              <tr key={e.id}>
                <td>{e.email}</td>
                <td>
                  <button className="btn btn-info mx-2">Edit</button>
                  <button className="btn btn-warning">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
