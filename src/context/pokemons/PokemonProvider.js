import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({children}){
    const [pokemons,setPokemons]=useState([]);
    const [metadata,setMetadata]=useState([]);
    const [activeSearch, setActiveSearch]=useState(false);
    const [pokemonDetails,setPokemonDetails]=useState([]);

    const getPokemons=async ()=>{
        try {
            setActiveSearch(true);
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
        }finally{
            setActiveSearch(false);
        }
    };
    const getPokemonDetails=async (id)=>{
        if(!id){
            Promise.reject('The id param is required');
        }

        try {
            setActiveSearch(true);
            const pokemonDetailsResult=await apiCall({url:`https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetails(pokemonDetailsResult);
        } catch (error) {
            setPokemonDetails([]);
        }finally{
            setActiveSearch(false);
        }
    }

    return (
        <PokemonContext.Provider value={{getPokemons, getPokemonDetails, setActiveSearch, pokemons, metadata, pokemonDetails, activeSearch}}>
            {children}
        </PokemonContext.Provider>
    );
};