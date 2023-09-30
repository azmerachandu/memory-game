import React from "react";

function Header(props) {
    return(
        <header>
              <h1>Pokemem</h1>
                <p className="info">
                    Click each card only once, clicking the same card twice will
                    reset score to 0
                </p>
              <div className="score">
                <p>Score is {props.score}</p>
                <p>Top Score is {props.topScore}</p>
              </div>
        </header>
    )
}

export default Header;
