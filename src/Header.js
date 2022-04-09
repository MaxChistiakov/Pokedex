import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
    const navigate = useNavigate()

    function clickLink (e) {
        if (e.target.className === 'linkWrapper main' || e.target.className === 'main') {
            navigate('/')
        } 
        if (e.target.className === 'linkWrapper captured' || e.target.className === 'captured') {
            navigate('/captured')
        }
    }

    return (
        <>
            <div className='header'>
                <div className='menu'>
                    <div className='linkWrapper main' onClick={ clickLink }>
                        <h4 className='main'>Main</h4>
                    </div>
                    <div className='linkWrapper captured' onClick={ clickLink }>
                        <h4 className='captured'>Captured pokemons</h4>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header