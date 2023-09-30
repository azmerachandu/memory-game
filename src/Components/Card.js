import React from "react";

function Card(props) {
    return(
        <div className="card" onClick={() => props.handleClick(props.pokemon.id)}>
            <div className="image">
                <img src={process.env.PUBLIC_URL + props.pokemon.image} alt={props.pokemon.name} />
            </div>
            <div className="name">
                <p>{props.pokemon.name}</p>
            </div>
        </div>
    )
}

export default Card;
