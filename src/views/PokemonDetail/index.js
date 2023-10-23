import { useParams } from "react-router-dom";

export default function PokemonDetails(){
    const {id}=useParams();
    return (
        <div>
            Pokemon details {id}
        </div>
    );
}