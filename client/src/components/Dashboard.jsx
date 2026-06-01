import { useState, useEffect } from "react";
import { getTasks } from "../services/taskService";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import StatsCard from "./StatsCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();

      setTasks(data);
    };

    fetchTasks();
  }, []);

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

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Developer Tasks</h1>

          <TaskForm addTask={addTask} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
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

          <SearchBar />

          <FilterBar />

          {tasks.length === 0 ? (
            <div className="bg-white p-10 rounded-xl text-center shadow-lg">
              <h2 className="text-2xl font-bold mb-2">No Tasks Found</h2>

              <p className="text-gray-500">Start adding developer tasks</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
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
