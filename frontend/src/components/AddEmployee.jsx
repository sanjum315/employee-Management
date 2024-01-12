import { useState } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category: "",
    image: "",
  });
  const [category, setCategory] = useState();
  const handleEmployeeAdd = (e) => {
    e.preventDefault();
    const appendArr = [
      "name",
      "email",
      "password",
      "salary",
      "address",
      "address",
      "category",
      "image",
    ];
    const formData = new FormData();
    appendArr.forEach((data) => {
      formData.append(data, employee[data]);
    });
    console.log(formData);
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="w-50 border rounded p-2">
        <h3>Add Employee</h3>
        <form className="row" onSubmit={handleEmployeeAdd}>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              name="name"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              name="email"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              name="password"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="salary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              name="salary"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              name="address"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="catetory"
              id="category"
              className="form-control"
              onChange={(e) =>
                setEmployee({ ...employee, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="image" className="form-label"></label>
            <input
              type="file"
              className="form-control rounded-0"
              name="image"
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.value })
              }
            />
          </div>
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary w-100 ">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
