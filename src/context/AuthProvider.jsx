import React, { createContext, useState, useEffect } from "react";
import { setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext(); // This creates the context

const AuthProvider = ({ children }) => {
  //  localStorage.clear()
  const [userData, setUserData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  

  useEffect(() => {
    setLocalStorage()
    const employees = localStorage.getItem("employees");
    if (employees) {
      setUserData(JSON.parse(employees));
    }
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser) {
      setLoggedInUser(JSON.parse(loggedInUser))

    }
  }, []);


  return (
    <AuthContext.Provider value={[userData, setUserData,loggedInUser,setLocalStorage]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
