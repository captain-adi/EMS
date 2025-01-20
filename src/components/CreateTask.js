import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [cetogery, setCetogery] = useState("");
  const { taskData, setTaskData } = useContext(TaskContext);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Admin Dashboard - Create Task
          </h1>
          <form className="space-y-4" onSubmit={(e)=>{
            e.preventDefault();
            setTaskData([
              ...taskData,
              {
                title: title,
                description: description,
                cetogery: cetogery,
                date: date,
              },
            ]);
            const taskInLocalStoreage = localStorage.setItem('tasks',JSON.stringify(taskData))
          
          }}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Task Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter task title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter task description"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {" "}
                Date
              </label>

              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Assign To
              </label>
              <input
                type="text"
                placeholder="Enter assignee name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category
              </label>
              <input
                value={cetogery}
                onChange={(e) => setCetogery(e.target.value)}
                type="text"
                placeholder="Enter task category"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
