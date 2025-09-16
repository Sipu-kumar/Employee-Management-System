import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    }

    updateEmployee(id, employee) {
        return axios.put(`http://localhost:8080/api/v1/employees/${id}`, employee);
    }



    deleteEmployee(employeeId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    }
}

// ✅ Fix for ESLint warning
const employeeServiceInstance = new EmployeeService();
export default employeeServiceInstance;
