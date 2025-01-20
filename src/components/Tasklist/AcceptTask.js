import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function AcceptTask() {
  const {activeTask,setCompletedTask,setFailedTask,setActiveTask}=useContext(TaskContext)
  console.log("active page:" , activeTask)
  return (
    <>
    {
      activeTask.map((task)=>{
        return(
          <div>
          <div className="bg-green-300 h-[70%] w-[350px] rounded-3xl flex-shrink-0 p-7">
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
          <button type="button" class="text-white font-bold bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300  rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e)=>{
               setCompletedTask((prevTasks) => [...prevTasks, task]); 
               setActiveTask(activeTask.filter((t)=>t !== task))

          }}>Completed Task</button>
          <button type="button" class="text-white font-bold bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300  rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e)=>{
              setFailedTask((prevTasks) => [...prevTasks, task]); 
              setActiveTask(activeTask.filter((t)=>t !== task))
          }}>Faild</button>
          </div>
           
          </div>
        </div>

        )
      })
    }
     
    </>
   
  );
}

export default AcceptTask;
