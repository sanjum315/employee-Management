import React from "react";

import { MdEdit } from "react-icons/md";
const Profile = () => {
  const handleEditProfile = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-5 mt-5">
      <div className="d-flex justify-content-center">
        <h3>Profile</h3>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="card p-2" style={{ width: "10rem" }}>
            <img
              src="https://dummyimage.com/150x150/000/fff"
              alt="Profile Image"
              className="card-img-top p-1 rounded border"
            />
            <div className="card-body">
              <span className="pr-1">
                <MdEdit />
              </span>
              <span>Edit Photo</span>
            </div>
          </div>
          <div style={{ width: "10rem" }} className="mt-3">
            <button
              className="btn w-100 text-white shadow"
              style={{ backgroundColor: "#1f62cf" }}
            >
              Settings
            </button>
          </div>
        </div>
        <div className="col-10">
          <div className="card">
            <div className="card-header"> Edit Profile</div>
            <div className="card-body">
              <from className="row" onSubmit={handleEditProfile}>
                <div className="col-5">
                  <label htmlFor="name" className="form-label">
                    <strong>Name</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="email" className="form-label">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="salary" className="form-label">
                    <strong>Salary</strong>
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    className="form-control"
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="category" className="form-label">
                    <strong>category</strong>
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="form-control"
                  >
                    <option value="">Select Category</option>
                  </select>
                </div>
                <div className="col-5">
                  <label htmlFor="password" className="form-label">
                    <strong>Password</strong>
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                    <button className="btn btn-dark">Change Password</button>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="address" className="form-label">
                    <strong>Address</strong>
                  </label>
                  <textarea
                    name="address"
                    className="form-control"
                    id="address"
                    rows="5"
                  ></textarea>
                </div>
                <div className="mt-2 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
