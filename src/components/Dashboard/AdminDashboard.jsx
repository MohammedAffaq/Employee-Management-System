import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AllTask from "../others/AllTask";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";


const AdminDashboard = ({changeUser,data}) => {
 
  return (
        <div className="h-screen w-full p-7">
          <Header changeUser = {changeUser} data={data}/>
          <CreateTask/>
          <AllTask />
        </div>
  );
};

export default AdminDashboard;

