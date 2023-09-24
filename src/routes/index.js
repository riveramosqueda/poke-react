import { Routes, Route } from "react-router-dom"
import Home from "../views/Home";
import Error404 from "../views/Errors/Error404";

export default function Routing(){
    return (
        <Routes>
            <Route path="/" exact element={ <Home /> } />

            <Route path="*" element={ <Error404 /> } />
        </Routes>
    );
}