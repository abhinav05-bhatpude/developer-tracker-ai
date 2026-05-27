function Sidebar(){

    return (

        <div className="bg-gray-900 text-white w-64 min-h-screen p-5">

            <h2 className="text-xl font-bold mb-6">
                Dashboard
            </h2>

            <ul className="space-y-4">

                <li className="hover:text-blue-400 cursor-pointer">
                    Tasks
                </li>

                  <li className="hover:text-blue-400 cursor-pointer">
                    Projects
                </li>


                  <li className="hover:text-blue-400 cursor-pointer">
                    Analytics
                </li>


                 <li className="hover:text-blue-400 cursor-pointer">
                    AI Suggestion
                </li>


            </ul>
        </div>
    );
}

export default Sidebar;