import React from "react";
import './PokemonPage.css'
import '../Constants/PokemonTypesColor.css'


import { pokemonStore } from '../Constants/Store'
import { pokemonPageCache } from '../Constants/Cache'

function PokemonPage ()  {
    const pokemonData = pokemonPageCache.list[0]
    const abilities = pokemonData.abilities.map(el => { return (el.ability.url)})

    function getAbil(arr) {
        arr.map(async function (el) {
        const resp = await fetch(el);
        const data = await resp.json();
        let nameArr = [];
        let abilityArr = []

        nameArr.push(data.name)

        if(data.effect_entries[0].language.name === 'en') {
            abilityArr.push(data.effect_entries[0].effect)
        } else {
            abilityArr.push(data.effect_entries[1].effect)
        }
        })
    }

        const image = pokemonData.sprites.other.dream_world.front_default;
        const id = pokemonData.id;
        const name = pokemonData.name
        const type = pokemonData.types.map(el => { return el.type.name}).join(' ')
        const weight = pokemonData.weight
        const wrap = 'wrapper'
        const style = `${wrap} ${type}`

        const pokeIndex = pokemonStore.storage.map(el => el.id).indexOf(id)
        const date = pokeIndex !== -1 ? pokemonStore.storage[pokeIndex].catchedTime : 'NOT CATCHED'
        const status = pokeIndex !== -1 ? 'Catched' : 'NOT CATCHED';

        return (
            <div className={ style  }  >
                <div className="imgWrapper">
                    { <img src={ image } alt='pokemon'/> }
                </div>
                <div className='infoWrapper'>
                    <div className="name">
                    <h3>ID: { id } </h3>
                    <p>name: { name } </p>
                </div>
               <div className="abilities">
                   <h3>{ getAbil(abilities) }</h3>
                </div>
                <div className="info">
                    <p>type:  { type } </p>
                    <p>weight:  { weight } </p>
                    <p>status: { status } </p>
                    <p>Capture date: { date } </p>
                </div> 
                </div>
            </div>
        )
}


export default PokemonPage