function Card({name, description, price, add}) {

    function handlerAdd() {
        console.log('click');
        add(name);
    }
    

    return(
        <div className="card">
            <h4>{name}</h4>
            <h3>${price}</h3>
            <p>{description}</p>
            <button type="button" onClick={handlerAdd}>Add</button>
        </div>
    )
}

export default Card;