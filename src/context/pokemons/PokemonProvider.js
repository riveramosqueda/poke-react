import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({children}){
    const [pokemons,setPokemons]=useState([]);

    const getPokemons=async ()=>{
        try {
            const pokemonsResult=await apiCall({url:'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'});
            setPokemons(pokemonsResult);
        } catch (error) {
            setPokemons([]);
        }
    }

    return (
        <PokemonContext.Provider value={{getPokemons, pokemons}}>
            {children}
        </PokemonContext.Provider>
    );
};