import React, { useState, useEffect } from 'react'
import Card from './Card'


function Pokedex() {

    const [ loadPokemons, setLoadPokemons ] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const [ allPokemons, setAllPokemons ] = useState([])
  
    async function getPokemons() {
      const response = await fetch(loadPokemons);
      const data = await response.json();
      setLoadPokemons(data.next)  
  
      function fillCard(result) {
        result.forEach(async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json()

          setAllPokemons(currentList => [...currentList, data])
          
        });
      }
      fillCard(data.results)
    }

    useEffect(() => {
      getPokemons();
    }, [])

    function fillMain() {
      return  allPokemons.map((pokemon) =>
        <Card
          data={pokemon}
          id={ pokemon.id }
          name= { pokemon.name }
          image={ pokemon.sprites.other.dream_world.front_default }
          type={ pokemon.types[0].type.name }
          key={ pokemon.id }
        />).sort((a, b) => {return a.key - b.key})
    }
  
  
    return (
      <>
      <div className="App">
        <div className='mainWrapper'>
          { fillMain() }
        </div>
        {<button className='loadMore' onClick={ getPokemons }>Load More</button>}
      </div>
      </>
    );
  }

  export default Pokedex;