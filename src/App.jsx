import React from 'react'
import { useState , useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)
  

  useEffect(() => {
    setLocalStorage();
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data)
    }
  }, [])
  
  const handleLogin = (email, password) => {
    // Fetch data from localStorage
    const { employees, admin } = getLocalStorage();
  
    // Check if user is admin
    const adminUser = admin.find((a) => a.email === email && a.password === password);
    if (adminUser) {
      setUser('admin');
      setLoggedInUserData(adminUser);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin', data:adminUser })
      );
      return; // Exit after admin login
    }
  
    // Check if user is an employee
    const employee = employees.find((e) => e.email === email && e.password === password);
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee); // Store employee data in state if needed
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      );
      return; // Exit after employee login
    }
  
    // If no match found, show invalid credentials alert
    alert('Invalid credentials');
  };

  

  
  
  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} data={loggedInUserData} />}
      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </div>
  )
};

export default App