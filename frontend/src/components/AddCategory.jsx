import React, { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState();
  const handleCategoryAdd = (e) => {
    e.preventDefault();
    console.log(category);
  };
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="w-25 border rounded p-3">
        <h4>Add Category</h4>
        <form onSubmit={handleCategoryAdd}>
          <div>
            <label htmlFor="categoryName">Category Name</label>
            <input
              type="text"
              name="categoryName"
              className="form-control"
              onChange={(e) =>
                setCategory({ ...category, categoryName: e.target.value })
              }
            />
          </div>
          <button
            className="btn btn-success my-2 rounded-0 w-100"
            type="submit"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
