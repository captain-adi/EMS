import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function CompleteTask() {
  const { completedTask } = useContext(TaskContext);

  return (
    <div className="flex gap-6">
      {completedTask.map((task) => {
        return (
          <>
            <div className="bg-yellow-300 h-[70%] w-[350px] rounded-3xl flex-shrink-0 p-7">
              <div className="flex justify-between ">
                <h3 className="bg-red-500 px-3 rounded-sm py-1">{task.cetogery}</h3>
                <h4>{task.date}</h4>
              </div>
              <h2 className="text-2xl font-bold mt-6">{task.title} </h2>
              <p>{task.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default CompleteTask;
