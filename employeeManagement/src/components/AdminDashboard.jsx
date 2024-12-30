import React, { useEffect, useState } from "react";
import Header from "./Header";
import TaskInfo from "./TaskInfo";
import { useDataContext } from "../context/DataProvider";

const AdminDashboard = () => {
  const { users,addTask } = useDataContext();
  const [allTask, setAllTasks] = useState([]);
  const [loading,setLoading]=useState(true);
  const [taskTitle,setTaskTitle]=useState('');
  const [date,setDate]=useState('');
  const [assignedTo,setAssignedTo]=useState('');
  const [taskCategory,setTaskCategory]=useState('');
  const [taskDesc,setTaskDesc]=useState('');
  const [opened,setOpened]=useState("");
  const [sortBy,setSortBy]=useState('active')


  const sortByEmployeeId=()=>{
    setLoading(true);
    const tasks = [];
    users.forEach((user) => {
      if (user.role === "employee") {
        user.tasks.forEach((task) => {
          tasks.push({ ...task, to: user.firstName });
        });
      }
    });
    setAllTasks(tasks);
    setLoading(false);
  }
  const sortByStatus=(state)=>{
    setLoading(true);
    const tasks=[];
    users.forEach((user)=>{
      if(user.role==='employee'){
        user.tasks.forEach((task)=>{
          if(task.state===state){
            tasks.push({...task, to:user.firstName});
          }
        })
      }
    })
    setAllTasks(tasks);
    setLoading(false);
  }
  const sortByCategory=()=>{
    console.log("sorting by category");
  }
  useEffect(() => {
    if(sortBy==='employeeId'){
      sortByEmployeeId();
    }else if(sortBy==='completed'){
      sortByStatus('completed');
    }else if(sortBy==='failed'){
      sortByStatus('failed');
    }else if(sortBy==='active'){
      sortByStatus('active');
    }else if(sortBy==='newTasks'){
      sortByStatus('newTask');
    }
    else if(sortBy==='category'){
      sortByCategory();
    }
  }, [sortBy,users]);

  const searchUserById=(userID)=>{
    return users.find(user=>user.id===userID && user.role==='employee');
  }
  const searchUserByName=(userName)=>{
    return users.find(user=>user.firstName.toLowerCase()===userName.toLowerCase() && user.role==='employee');
  }
  const getUserTaskNum=(userId)=>{
    const targetted=searchUserById(userId);
    if(!targetted)  return null;
    let totalTask=1;
    targetted.tasks.forEach((task)=>{
      totalTask+=1;
    })
    return totalTask;

  }
  const handleCreteTask=(e)=>{
    e.preventDefault();
    let targeted=searchUserByName(assignedTo);
    if(!targeted){
      alert("Invalid userName");
      return;
    }
    let userId=targeted.id;
    let userTotalTask=getUserTaskNum(userId);
    let taskId=`${userId}0${userTotalTask}`
    let task={
      taskId: taskId,
        title: taskTitle,
        date: date,
        category: taskCategory,
        description:taskDesc,
        state: "newTask",
    }
    addTask(userId,task);
    setTaskTitle("");
    setDate("");
    setAssignedTo("");
    setTaskCategory("");
    setTaskDesc("");
  }

  return (
    <div className="h-full w-full p-3">
      <div>
        <Header />
      </div>
      <form className="bg-gray-800 flex " onSubmit={handleCreteTask}>
        <div className="w-1/2 p-3 flex flex-col gap-2">
          <div className="flex flex-col ">
            <label htmlFor="taskTitle">Task Title:</label>
            <input required
              type="text"
              id="taskTitle"
              placeholder="Make UI design"
              className="bg-transparent border-2 rounded-md px-2 py-1"
              value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="date">Deadline:</label>
            <input required
              type="date"
              id="date"
              className="bg-transparent border-2 rounded-md px-2 py-1"
              value={date} onChange={(e)=>setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="assignTo">Assign to:</label>
            <input required
              type="text"
              id="assignTo"
              placeholder="Employee name"
              className="bg-transparent border-2 rounded-md px-2 py-1"
              value={assignedTo} onChange={(e)=>setAssignedTo(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="category">Category:</label>
            <input required
              type="text"
              id="category"
              placeholder="design, dev, etc"
              className="bg-transparent border-2 rounded-md px-2 py-1"
              value={taskCategory} onChange={(e)=>setTaskCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="w-1/2 p-3 flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea required
            name=""
            className="w-full bg-transparent border-2 rounded-md px-2 py-1 h-2/3"
            id="description"
            value={taskDesc} onChange={(e)=>setTaskDesc(e.target.value)}
          ></textarea>
          <input
            type="submit"
            value="Create Task"
            onClick={handleCreteTask}
            className="border-2 rounded-md w-full py-2 mt-3 bg-blue-600 cursor-pointer"
          />
        </div>
      </form>
      <div className="w-full bg-gray-300 text-black px-3 py-2 flex justify-between rounded-md">
        Sort by : 
        <select name="" id="" value={sortBy} className="bg-transparent"
        onChange={(e)=>setSortBy(e.target.value)}
        >
          <option value="employeeId"> Employee ID</option>
          {/* <option value="category"> Category</option> */}
          <option value="active"> Active tasks</option>
          <option value="newTasks"> New tasks</option>
          <option value="failed"> Failed tasks</option>
          <option value="completed"> Completed tasks</option>
        </select>
      </div>
      {
        loading?"":(
          <div className="flex flex-col gap-2 mt-3 overflow-auto h-[280px]">
            {
              allTask.map((task,index)=>(
                <TaskInfo task={task} key={index} setOpened={setOpened} opened={opened}/>
                
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default AdminDashboard;
