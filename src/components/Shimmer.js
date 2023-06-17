function Shimmer() {
    return (
        <div className="flex flex-wrap place-content-center">
            {Array(10).fill("").map((e,index) =>
                <div key={index} className="w-56 h-80 p-2 m-2 shadow-lg bg-gray-200">

                </div>)}
        </div>
    )
}

export default Shimmer;