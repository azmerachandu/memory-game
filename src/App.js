import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

import pokemons from './pokemons_1.json'

function App() {
    const [score, setScore] = useState(0);
    const [topScore, setTopscore] = useState(0);
    const [pokemonsArray, setPokemonsArray] = useState(pokemons);

    const handleIncrement = () => {
        setScore(prevScore => prevScore + 1);
    }

    const updateTopscore = () => {
        setTopscore(score > topScore ? score : topScore);
    }

    const shuffleArray = array => {
        // assign array items from last to first
        let lastIndex = array.length - 1;
        let randomIndex, tmp;

        while(lastIndex > 0) {
            randomIndex = Math.floor(Math.random() * lastIndex);

            tmp  = array[lastIndex];
            array[lastIndex] = array[randomIndex];
            array[randomIndex] = tmp;

            lastIndex --;
        }
        console.log(array);
        return array;
    }

    const handleClick = (id) => {
        pokemonsArray.forEach(pokemon => {
            if(pokemon.id === id) {
                if(pokemon.clicked) {
                    // if the card was already clicked, you lose!
                    // update top score and reset score
                    updateTopscore();
                    setScore(0);

                    // set clicked to false in all cards for new game
                    pokemonsArray.forEach(pokemon => pokemon.clicked = false);
                } else {
                    pokemon.clicked = true;
                    console.log(`score is ${score}`);
                    handleIncrement();
                }
                console.log(pokemon);
            }
        });
        // shuffle array on each click
        setPokemonsArray(shuffleArray(pokemonsArray));
    }

    const pokemonCards = pokemonsArray.map( pokemon =>
        <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleClick={handleClick}
        />
    );

    return (
        <div className="App">
            <Header score={score} topScore={topScore}/>
            <Main pokemonCards={pokemonCards}/>
            <Footer/>
        </div>
    );
}

export default App;
