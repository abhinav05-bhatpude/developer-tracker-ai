function TaskCard({ task }) {

    return (

        <div className="bg-white shadow-lg rounded-xl p-5 w-full">

            <h2 className="text-xl font-bold mb-2">
                {task.title}
            </h2>

            <p className="text-gray-600 mb-4">
                Developer productivity task
            </p>

            <div className="flex justify-between items-center">

                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">

                    {
                        task.completed
                            ? "Completed"
                            : "In Progress"
                    }

                </span>

                <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Complete
                </button>

            </div>

        </div>
    );
}

export default TaskCard;