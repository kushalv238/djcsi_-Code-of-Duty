const Employee = (props) => {
    return (
        <div
            className="product"
            title={props.title}
        >
            <div className="prod-img">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="prod-data">
                <div className="prod-info">
                    <h2 className='bold'>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="prod-price">
                    <p className='bold'>Rs. {props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Employee