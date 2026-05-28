import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import StatsCard from "./StatsCard";

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build REST API",
      completed: false,
    },

    {
      id: 2,
      title: "Learn MongoDB",
      completed: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Developer Tasks</h1>

          <TaskForm />

          <div className="grid grid-cols-3 gap-5 mb-6">
            <StatsCard title="Total Tasks" count={tasks.length} />

            <StatsCard
              title="Completed"
              count={tasks.filter((task) => task.completed).length}
            />

            <StatsCard
              title="Pending"
              count={tasks.filter((task) => !task.completed).length}
            />
          </div>

          {tasks.length === 0 ? (
            <div className="bg-white p-10 rounded-xl text-center shadow-lg">
              <h2 className="text-2xl font-bold mb-2">No Tasks Found</h2>

              <p className="text-gray-500">Start adding developer tasks</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-5">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
