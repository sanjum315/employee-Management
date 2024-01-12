import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState(["IT", "Development", "Designer"]);
  return (
    <div className="px-5 mt-5 ">
      <div className="d-flex justify-content-center">
        <h3>Category List</h3>
      </div>
      <Link to="/dashboard/add_category" className="btn btn-primary">
        Add Category
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, i) => (
            <tr key={i}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
