import React from "react"
import './Button.css'

import { pokemonStore } from './Store'

function ReleaseButton(props) {
    function releasePokemon() {
            pokemonStore.removePokemon(props)
    }
   
    return (
        <button className='catchButton catched' onClick={ releasePokemon }>Release!</button>
    )
}

export { ReleaseButton }

