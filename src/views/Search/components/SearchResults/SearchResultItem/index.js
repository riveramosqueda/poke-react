import { Link } from "react-router-dom";

export default function SearchResultItem({item, pokemonNumber}){
    return (
        <tr>
            <td>{pokemonNumber}</td>
            <td>{item.name}</td>
            <td><Link to={`/pokemon/${pokemonNumber}`}>More information</Link></td>
        </tr>
    );
}