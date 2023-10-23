import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({children}){
    const [pokemons,setPokemons]=useState([]);
    const [metadata,setMetadata]=useState([null]);

    const getPokemons=async ()=>{
        try {
            const pokemonsResult=await apiCall({url:'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'});
            setPokemons(pokemonsResult.results);
            setMetadata({
                'count':pokemonsResult.count,
                'next':pokemonsResult.next,
                'previous':pokemonsResult.previous,
            });
        } catch (error) {
            setPokemons([]);
            setMetadata(null);
        }
    }

    return (
        <PokemonContext.Provider value={{getPokemons, pokemons, metadata}}>
            {children}
        </PokemonContext.Provider>
    );
};