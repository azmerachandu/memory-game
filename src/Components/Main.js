import React from "react";

function Main(props) {
    return(
        <main>
          <div className="wrapper">
            {props.pokemonCards}
          </div>
        </main>
    )
}

export default Main;
