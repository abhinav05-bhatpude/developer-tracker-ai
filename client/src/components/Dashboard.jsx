import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

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

        {
            id: 3,
            title: "Deploy Backend Project",
            completed: false,
        },
    ]);

    return (

        <div>

            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 p-6 bg-gray-100 min-h-screen">

                    <h1 className="text-3xl font-bold mb-6">
                        Developer Tasks
                    </h1>

                    <TaskForm />

                    <div className="grid grid-cols-3 gap-5">

                        {
                            tasks.map((task) => (

                                <TaskCard
                                    key={task.id}
                                    task={task}
                                />

                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;