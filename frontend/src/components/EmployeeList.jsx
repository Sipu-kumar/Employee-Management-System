import React, { useEffect, useState } from "react";
import EmployeeService from './EmployeeService'; 

import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(() => fetchEmployees());
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employees List</h2>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/add")}>Add Employee</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.firstname}</td>
              <td>{emp.lastname}</td>
              <td>{emp.emailId}</td>
              <td>
                <button onClick={() => navigate(`/update/${emp.id}`)} className="btn btn-info">Update</button>
                <button onClick={() => deleteEmployee(emp.id)} className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
