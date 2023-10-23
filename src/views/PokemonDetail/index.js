import { useParams } from "react-router-dom";
import PokemonContext from "../../context/pokemons";
import { useContext, useEffect } from "react";
import LoadingScreen from "../PropElements/LoadingScreen";

export default function PokemonDetails(){
    const {getPokemonDetails, pokemonDetails, activeSearch}=useContext(PokemonContext);
    const {id}=useParams();

    useEffect(()=>{
        getPokemonDetails(id).catch(null);
    },[]);

    if(activeSearch){
        return <LoadingScreen />;
    }

    return (
        <div className="container">
            <h1>Details for <span className="text-warning" style={{'textTransform':'uppercase'}}>{pokemonDetails.name}</span></h1>
            <hr />
        </div>
    );
}