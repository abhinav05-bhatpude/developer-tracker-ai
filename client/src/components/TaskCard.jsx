function TaskCard({ task, deleteTask,toggleTask,}) {

    return (

        <div className="bg-white shadow-lg rounded-xl p-5 w-full">

            <h2 className="text-xl font-bold mb-2">
                {task.title}
            </h2>

            <p className="text-gray-600 mb-4">

                {
                    task.completed
                        ? "Completed"
                        : "In Progress"
                }

            </p>

            <div className="flex justify-between items-center">

                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">

                    {
                        task.completed
                            ? "Completed"
                            : "Pending"
                    }

                </span>

                <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>

                <button
    onClick={() => toggleTask(task.id)}
    className="bg-green-500 text-white px-3 py-1 rounded"
>
    Complete
</button>

            </div>

        </div>
    );
}

export default TaskCard;