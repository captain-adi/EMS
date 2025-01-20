import React, { useContext } from "react";
import Header from "../Header";
import TaskNumbers from "../TaskNumbers";
import TaskList from "../TaskList";
import { TaskContext } from "../../context/TaskContext";

function EmployeeDashboard() {
  const { userData, failedTask, completedTask, activeTask, tasks } =
    useContext(TaskContext);
  // const tasks = JSON.parse(localStorage.getItem('tasks'))
  return (
    <div className="h-screen bg-gray-600">
      <Header userData={userData} />
      <div className="flex gap-5 mt-8 justify-center  flex-wrap">
        <TaskNumbers
          length={tasks.length}
          bgColor="bg-blue-400"
          taskName="NewTask"
          taskNumbers={userData?.data.taskCount?.newTask}
        />
        <TaskNumbers
          bgColor="bg-green-400"
          taskName="Active"
          length={activeTask.length}
          taskNumbers={userData?.data.taskCount?.active}
        />
        <TaskNumbers
          length={completedTask.length}
          bgColor="bg-yellow-400"
          taskName="Completed"
          taskNumbers={userData?.data.taskCount?.completedTask}
        />
        <TaskNumbers
          length={failedTask.length}
          bgColor="bg-red-400"
          taskName="Failed"
          taskNumbers={userData?.data.taskCount?.failed}
        />
      </div>
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
