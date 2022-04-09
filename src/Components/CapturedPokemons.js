import React from "react"
import Card from './Card'
//import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import  { pokemonStore }  from '../Constants/Store'
import './CapturedPokemons.css'

const CapturedPokemons = observer(() => {
    //const navigate = useNavigate();
    const arr = pokemonStore.storage

    /* function openPokemonPage(e) {
        if(e.target.className === 'catchButton' || e.target.className ==='catchButton catched') {
            return e.stopPropagation()
        }
        navigate(`pokemonPage/${this.id}`)
    } */

    return (
        <div className="wrapper">
            {arr.map(el => {
                return (
                    <Card /* onClick={ openPokemonPage } */
                    data={el}
                    id={ el.id }
                    name= { el.name }
                    image={ el.sprites.other.dream_world.front_default }
                    type={ el.types[0].type.name }
                    key={ el.id }
                    />
                )
            })}
        </div>
    )
})

export default CapturedPokemons