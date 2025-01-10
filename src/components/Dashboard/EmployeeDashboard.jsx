import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

// const [userData,setUserData] = useContext(AuthContext)

const EmployeeDashboard = (props) => {

  return (
    <div className='p-4 md:p-6 lg:p-10 bg-[#1c1c1c]'>
      
      <Header changeUser = {props.changeUser} data={props.data}/>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TaskListNumbers data={props.data}/>
      </div>
      <div className="mt-6 flex-grow">
        <TaskList  data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard

