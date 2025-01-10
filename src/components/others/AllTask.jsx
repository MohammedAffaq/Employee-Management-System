import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  
  const [userData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="mb-2 py-2 px-4 flex justify-between rounded font-bold text-xl">
        <h2 className="w-1/5 text-gray-300">Employee Name</h2>
        <h3 className="w-1/5 text-gray-300">New Task</h3>
        <h3 className="w-1/5 text-gray-300">Active Task</h3>
        <h3 className="w-1/5 text-gray-300">Completed</h3>
        <h3 className="w-1/5 text-gray-300">Failed</h3>
      </div>
      <div>
        {userData.map((employee) => (
          <div
            key={employee.id}
            className="bg-[#181818] mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-500"
          >
            <h2 className="text-lg font-medium w-1/5">{employee.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">
              {employee.taskCounts.newTask}
            </h3>
            <h3 className="text-lg font-medium w-1/5 text-yellow-600">
              {employee.taskCounts.active}
            </h3>
            <h3 className="text-lg font-medium w-1/5 text-green-600">
              {employee.taskCounts.completed}
            </h3>
            <h3 className="text-lg font-medium w-1/5 text-red-600">
              {employee.taskCounts.failed}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
