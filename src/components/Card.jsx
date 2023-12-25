const Card = ({Number, Operation}) => {

    return (
        <div className="text-white bg-blue p-6 rounded-xl mx-3 w-1/3">
            <h1 className="text-3xl font-semibold">{Number} </h1>
            <h2 className="text-sm"> {Operation} </h2>
        </div>
    )
}

export default Card