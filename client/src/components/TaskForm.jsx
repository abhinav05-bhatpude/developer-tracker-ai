import { useState } from "react";

function TaskForm({ addTask }) {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!title) return;

        const newTask = {
            id: Date.now(),
            title,
            completed: false,
            category: "Frontend",
            priority: "Low",
        };

        addTask(newTask);

        setTitle("");
    };

    return (

        <div className="bg-white p-5 rounded-xl shadow-lg mb-6">

            <h2 className="text-2xl font-bold mb-4">
                Add New Task
            </h2>

            <form
                onSubmit={handleSubmit}
                className="flex gap-4"
            >

                <input
                    type="text"
                    placeholder="Enter task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-3 rounded w-full"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-5 rounded"
                >
                    Add
                </button>

            </form>

        </div>
    );
}

export default TaskForm;