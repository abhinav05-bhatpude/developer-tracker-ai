function Navbar(){
    return(
        <nav className="bg-black text-white p-4 flex justify-between items-center">

            <h1 className="text-2xl font-bold">
                DevTrack AI
            </h1>

            <button className="bg-blue-500 px-4 py-2 rounded">
                Add Task
            </button>

        </nav>
    )
}

export default Navbar;