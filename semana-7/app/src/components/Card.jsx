import React from "react";

function Card({ name, price, description, image }) {

    return (

        <div className="card">
            <h4>{ name }</h4>
            <p>{ description }</p>
            <img src={ image } alt={name} />
            <hr />
            <h5>${ price + 2 }</h5>
            <button type="submit">Ver</button>
        </div>
    )
}

export default Card;