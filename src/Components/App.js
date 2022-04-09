import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
 
import Header from './Header'
import Pokedex from './Pokedex'
import PokemonPage from "./PokemonPage"
import CapturedPokemons from './CapturedPokemons';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Pokedex />}/>
      <Route path="/pokemonPage/:id" element={<PokemonPage />}/>
      <Route path="/captured" element={<CapturedPokemons />}/>
      <Route path="/captured/pokemonPage/:id" element={<PokemonPage/>}/>
    </Routes>
    </>
  )
    
}

export default App;
