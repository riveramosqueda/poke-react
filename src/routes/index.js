import { Routes, Route } from "react-router-dom"
import Home from "../views/Home";
import Error404 from "../views/PropElements/Errors/Error404";
import Search from "../views/Search";
import PokemonDetails from "../views/PokemonDetail";
import ScrollToTop from "../components/ScrollToTop";

export default function Routing(){
    return (
        <>
            <ScrollToTop />
            <Routes>
                
                <Route path="/" exact element={ <Search /> } />
                <Route path="/home" exact element={ <Home /> } />
                <Route path="/pokemon/:id" exact element={ <PokemonDetails /> } />

                <Route path="*" element={ <Error404 /> } />
            </Routes>
        </>
    );
}