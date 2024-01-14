const Shimmer = () => {
    return (
        <div className="grid grid-rows-4 grid-flow-col gap-4">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div className="w-[200px]" key={index}></div>
                ))}
        </div>
    )
}

export default Shimmer;