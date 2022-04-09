import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import './PokemonTypesColor.css'
import { pokemonStore }  from './Store'
import { pokemonPageCache } from './Cache'
import { ReleaseButton } from './ButtonRelease'
import { CatchButton } from './ButtonCatch'
import { observer } from 'mobx-react-lite'


const Card = observer( ({ data, id, name, image, type }) => {
    const style = `card ${type}`
    const navigate = useNavigate();
    const arr = pokemonStore.storage.map(el => el.id)
    const ans = arr.includes(id)

    function openPokemonPage(e) {
        if(e.target.className === 'catchButton' || e.target.className ==='catchButton catched') {
            return e.stopPropagation()
        }
        pokemonPageCache.addContext(data)
        navigate(`pokemonPage/${id}`)
    }

    return (
        <div className={ style } onClick={ openPokemonPage }>
            <div className='imageWrapper'>
                <img src={ image } alt={ name }/>
            </div>
            <h3># { id } </h3>
            <h3> { name } </h3>
            <p>Type: { type }</p>
            { ans ? <ReleaseButton props={data}/> : <CatchButton props={data}/> }
        </div>
    );
})

export default Card;