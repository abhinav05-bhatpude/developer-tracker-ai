function FilterBar(){

    return(

        <div className="flex gap-4 mb-6">

            <select className="border p-3 rounded-xl">
                <option>All Categories</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>AI/ML</option>
                <option>Deployment</option>

            </select>

            <select className="border p-3 rounded-xl">
                <option>All Priorities</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

        </div>
    );
}

export default FilterBar;