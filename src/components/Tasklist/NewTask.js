import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";


function NewTask() {
const {setActiveTask,activeTask,tasks,setTasks}=useContext(TaskContext)


  
  return (
 <>
 {
  tasks.map((task,index)=>{
    return(
      <>
       <div key={index}>
      <div className="bg-blue-300 h-[70%] w-[350px] rounded-3xl flex-shrink-0 p-7">
        <div className="flex justify-between ">
          <h3 className="bg-red-500 px-3 rounded-sm p-1">{task.cetogery}</h3>
          <h4>{task.date}</h4>
        </div>
        <h2 className="text-2xl font-bold mt-6">
        {task.title}{" "}
        </h2>
        <p>
          {task.description}
        </p>
        <div className="flex justify-between mt-4">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{
           setActiveTask((prevTasks) => [...prevTasks, task]);
          console.log("active task data :" , activeTask)
          setTasks(tasks.filter((t)=>t !== task))
        }} >Accept</button>
        <button type="button" class="text-white font-bold bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300  rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
         onClick={() => {
          setTasks(tasks.filter((t) => t !== task)); // Remove from tasks
        }}>Reject</button>
        </div>
      </div>
    </div>
      
      </>
    )
  })
 }
 </>
   
  );
}

export default NewTask;
