import React, { useEffect, useState } from 'react'
import Header from './Header'
import TaaskStats from './TaaskStats'
import Task from './Task'
import { useUserContext } from '../context/UserProvider'

const UserDashboard = () => {
  const [stats,setStats]=useState({});
  const {userDetails}=useUserContext();
  console.log("form userDashboard:",userDetails);
  useEffect(()=>{
    let active=0,completed=0,failed=0,newTask=0;
    userDetails.tasks.forEach((task)=>{
      if(task.state.toLowerCase()==='active') active+=1;
      else if(task.state.toLowerCase()==='completed')completed+=1;
      else if(task.state.toLowerCase()==='failed')failed+=1;
      else newTask+=1;
      
    })
    setStats({"Active":active,"Completed":completed,"Failed":failed,"newTask":newTask});
  },[userDetails])
  return (
    <div className='p-3 w-full'>
      <div>
        <Header/>
      </div>
      <div className='flex flex-wrap p-3 gap-2 justify-center'>
        
        <TaaskStats for ='New Tasks' val={stats.newTask} styles={{background:"#fcab10",}}/>
        <TaaskStats for ='Active Tasks' val={stats.Active} styles={{background:"#2b9eb3",}}/>
        <TaaskStats for ='Completed Tasks' val={stats.Completed}styles={{background:"#44af69",}}/>
        <TaaskStats for ='Failed Tasks' val={stats.Failed }styles={{background:"#f8333c",}}/>
      </div>
      <div className='flex flex-col p-3 gap-2 overflow-auto h-80'>
        {
          userDetails && userDetails.tasks.map((task)=>{
            return(<Task task={task} />);
          })
        }
        {/* <Task styles={{background:"#ef4444",}}/> */}
      </div>
    </div>
  )
}

export default UserDashboard
