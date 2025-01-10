import React from "react";

const NewTask = ({ data }) => {
  const handleAcceptTask = () => {
    // Get logged-in user data from local storage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser || !loggedInUser.data || !Array.isArray(loggedInUser.data.tasks)) {
      console.error("Invalid logged-in user data structure.");
      return;
    }

    // Destructure tasks and taskCounts
    const { tasks, taskCounts } = loggedInUser.data;

    // Find the task to update
    const taskIndex = tasks.findIndex(
      (task) =>
        task.taskTitle === data.taskTitle &&
        task.taskDescription === data.taskDescription &&
        task.newTask === true
    );

    if (taskIndex !== -1) {
      // Update the task's status
      tasks[taskIndex] = {
        ...tasks[taskIndex],
        active: true,
        newTask: false,
      };

      // Update task counts
      taskCounts.newTask -= 1;
      taskCounts.active += 1;

      // Save updated data back to local storage
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          ...loggedInUser,
          data: { ...loggedInUser.data, tasks, taskCounts },
        })
      );

      // Notify parent component
      

      console.log(`Task "${tasks[taskIndex].taskTitle}" moved to Active Tasks.`);
    } else {
      console.error("Task not found in New Tasks.");
    }
  };

  return (
        <div className="flex-shrink-0 h-full w-[300px] bg-green-400 p-5 rounded-xl mb-4">
          <div className="flex items-center justify-between">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
              {data.category}
            </h3>
            <h4 className="text-sm">{data.taskDate}</h4>
          </div>
    
          <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
          <p className="text-sm mt-2">{data.taskDescription}</p>
          <div className="mt-6">
            <button
              onClick={handleAcceptTask}
              className="bg-blue-500 rounded font-medium px-2 py-1 text-xs"
            >
              Accept Task
            </button>
          </div>
        </div>
      );
};

export default NewTask;
