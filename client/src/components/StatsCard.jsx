function StatsCard({titel,count}){

    return (
        <div className="bg-white p-5 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold mb-2">
            {title}
            </h2>
            <p className="text-3xl font-bold text-blue-500">
 {count}
            </p>
        </div>
    );
}

export default StatsCard;