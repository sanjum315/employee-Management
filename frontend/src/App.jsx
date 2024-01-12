import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Category from "./components/Category";
import Employee from "./components/Employee";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmployee";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/dashboard/category" element={<Category />}></Route>
            <Route path="/dashboard/employee" element={<Employee />}></Route>
            <Route path="/dashboard/profile" element={<Profile />}></Route>
            <Route
              path="/dashboard/add_category"
              element={<AddCategory />}
            ></Route>
            <Route
              path="/dashboard/add_employee"
              element={<AddEmployee />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
