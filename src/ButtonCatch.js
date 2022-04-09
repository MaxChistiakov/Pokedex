import React from "react"
import './Button.css'

import { pokemonStore } from './Store'

function CatchButton(props) {
    function catchPokemon() {
            pokemonStore.addPokemon(props)
    }

    return (
        <button className='catchButton' onClick={ catchPokemon }>Catch!</button>
    )
}

export { CatchButton }
