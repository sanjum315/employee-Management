import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URI}/auth/Login`, values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/Dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="w-25 bg-white rounded p-3">
        <span className="text-danger">{error && error}</span>
        <h2 className="text-center ">Login </h2>
        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="py-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <div>
            <input type="checkbox" name="check" id="check" className="me-2" />
            <label htmlFor="check"> Remember Me</label>
          </div>
          <button className="btn btn-success w-100 my-3"> Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
