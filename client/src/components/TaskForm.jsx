import { useState } from "react";

function TaskForm(){

    const [title,setTitle] = useState("");

    return(

        <div className="bg-white p-5 rounded-xl shadow-lg mb-6">

            <h2 className="text-2xl font-bold mb-4">
                Add New Task
            </h2>

            <form className="flex gap-4">

                <input
                type="text"
                placeholder="Enter task"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                className="border p-3 rounded w-full"
                />

                <button className="bg-blue-500 text-white px-5 rounded">
                    Add
                </button>

            </form>

        </div>
    );
}

export default TaskForm;