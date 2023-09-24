import { Routes, Route } from "react-router-dom"
import Home from "../views/Home";
import Error404 from "../views/Errors/Error404";
import Search from "../views/Search";

export default function Routing(){
    return (
        <Routes>
            <Route path="/" exact element={ <Search /> } />

            <Route path="*" element={ <Error404 /> } />
        </Routes>
    );
}