import SearchResultItem from "./SearchResultItem";

export default function SearchResults({pokemons, activeSearch}){
    const parsePokemonNumber=(data)=> {
        return data.url.match(/\/\d+\/$/g)[0]?.replaceAll('/','');
    };

    return (
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {activeSearch && pokemons?.length===0 && <tr><td colSpan={4}><div className="alert alert-info">Sin resultados</div></td></tr>}
                    {pokemons?.map((item)=>{
                        return <SearchResultItem item={item} pokemonNumber={parsePokemonNumber(item)} key={item.name} />
                    })}
                </tbody>
            </table>
        </div>
    );
}