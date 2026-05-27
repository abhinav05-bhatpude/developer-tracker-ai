function TaskCard(){
    return (

        <div className="bg-white shadow-lg rounded-xl p-5 w-full">

            <h2 className="text-xl font-bold mb-2">
               Build REST API
            </h2>

            <p className="text-gray-600 mb-4">
         Complete Express backend project
            </p>

            <div className="flex justify-between items-center">

                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    In Progress
                </span>

                <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Complete
                </button>

            </div>

        </div>
    );
}

export default TaskCard;