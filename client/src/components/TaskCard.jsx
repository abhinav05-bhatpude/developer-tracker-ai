function TaskCard({ task, deleteTask, toggleTask }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-full">
      <h2 className="text-xl font-bold mb-2">{task.title}</h2>

      <p className="text-gray-600 mb-4">Developer productivity task</p>

      <div className="flex gap-3 mb-4">
        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
          {task.category}
        </span>

        <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm">
          {task.priority}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            task.completed
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {task.completed ? "Completed" : "In Progress"}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => toggleTask(task.id)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Complete
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
