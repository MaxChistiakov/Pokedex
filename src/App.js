import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pokedex from './Pokedex'
import './App.css';
import PokemonPage from "./PokemonPage" 
import Header from './Header'
import CapturedPokemons from './CapturedPokemons';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Pokedex />}/>
      <Route path="/pokemonPage/:id" element={<PokemonPage />}/>
      <Route path="/captured" element={<CapturedPokemons />}/>
    </Routes>
    </>
  )
    
}

export default App;
