import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    // Group tasks into categories
    const newTasks = data.tasks.filter(task => task.newTask);
    const acceptedTasks = data.tasks.filter(task => task.active);
    const completedTasks = data.tasks.filter(task => task.completed);
    const failedTasks = data.tasks.filter(task => task.failed);

    return (
        <div id='tasklist' className='w-full py-4'>
            {/* New Tasks Section */}
            <div className='mb-8'>
                <h2 className='text-lg font-bold mb-2'>New Tasks</h2>
                <div className='flex gap-5 overflow-x-auto flex-nowrap'>
                    {newTasks.length > 0 ? (
                        newTasks.map((task, idx) => (
                            <NewTask key={idx} data={task} />
                        ))
                    ) : (
                        <p className='text-gray-500'>No new tasks</p>
                    )}
                </div>
            </div>

            {/* Accepted Tasks Section */}
            <div className='mb-8'>
                <h2 className='text-lg font-bold mb-2'>Accepted Tasks</h2>
                <div className='flex gap-5 overflow-x-auto flex-nowrap'>
                    {acceptedTasks.length > 0 ? (
                        acceptedTasks.map((task, idx) => (
                            <AcceptTask key={idx} data={task} />
                        ))
                    ) : (
                        <p className='text-gray-500'>No accepted tasks</p>
                    )}
                </div>
            </div>

            {/* Completed Tasks Section */}
            <div className='mb-8'>
                <h2 className='text-lg font-bold mb-2'>Completed Tasks</h2>
                <div className='flex gap-5 overflow-x-auto flex-nowrap'>
                    {completedTasks.length > 0 ? (
                        completedTasks.map((task, idx) => (
                            <CompleteTask key={idx} data={task} />
                        ))
                    ) : (
                        <p className='text-gray-500'>No completed tasks</p>
                    )}
                </div>
            </div>

            {/* Failed Tasks Section */}
            <div className='mb-8'>
                <h2 className='text-lg font-bold mb-2'>Failed Tasks</h2>
                <div className='flex gap-5 overflow-x-auto flex-nowrap'>
                    {failedTasks.length > 0 ? (
                        failedTasks.map((task, idx) => (
                            <FailedTask key={idx} data={task} />
                        ))
                    ) : (
                        <p className='text-gray-500'>No failed tasks</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskList;
