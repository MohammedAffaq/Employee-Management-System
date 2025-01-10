import React from "react";

const AcceptTask = ({data}) => {
 

  // Handle Mark as Complete
  const handleMarkAsComplete = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser || !loggedInUser.data || !Array.isArray(loggedInUser.data.tasks)) {
      console.error("Invalid logged-in user data structure.");
      return;
    }

    const { tasks, taskCounts } = loggedInUser.data;

    const taskIndex = tasks.findIndex(
      (task) =>
        task.taskTitle === data.taskTitle &&
        task.taskDescription === data.taskDescription &&
        task.active === true
    );

    if (taskIndex !== -1) {
      tasks[taskIndex] = {
        ...tasks[taskIndex],
        completed: true,
        active: false,
      };

      taskCounts.active -= 1;
      taskCounts.completed += 1;

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          ...loggedInUser,
          data: { ...loggedInUser.data, tasks, taskCounts },
        })
      );

      
      console.log(`Task "${tasks[taskIndex].taskTitle}" marked as completed.`);
    } else {
      console.error("Task not found in Active Tasks.");
    }
  };

  // Handle Mark as Failed
  const handleMarkAsFailed = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser || !loggedInUser.data || !Array.isArray(loggedInUser.data.tasks)) {
      console.error("Invalid logged-in user data structure.");
      return;
    }

    const { tasks, taskCounts } = loggedInUser.data;

    const taskIndex = tasks.findIndex(
      (task) =>
        task.taskTitle === data.taskTitle &&
        task.taskDescription === data.taskDescription &&
        task.active === true
    );

    if (taskIndex !== -1) {
      tasks[taskIndex] = {
        ...tasks[taskIndex],
        failed: true,
        active: false,
      };

      taskCounts.active -= 1;
      taskCounts.failed += 1;

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          ...loggedInUser,
          data: { ...loggedInUser.data, tasks, taskCounts },
        })
      );

      
      console.log(`Task "${tasks[taskIndex].taskTitle}" marked as failed.`);
    } else {
      console.error("Task not found in Active Tasks.");
    }
  };

  return (
    <div className="flex-shrink-0 w-[300px] bg-red-400 p-5 rounded-xl mb-4">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={handleMarkAsComplete}
          className="bg-green-500 rounded font-medium py-1 px-2 text-xs"
        >
          Mark as Completed
        </button>
        <button
          onClick={handleMarkAsFailed}
          className="bg-red-500 rounded font-medium py-1 px-2 text-xs"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
