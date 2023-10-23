import SearchBox from './components/SearchBox';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';
import { useContext } from 'react';
import PokemonContext from '../../context/pokemons';

export default function Search(){
    const [activeSearch, setActiveSearch]=useState(false);
    const {getPokemons, pokemons, metadata}=useContext(PokemonContext);

    useEffect(()=>{
        getPokemons().catch(null);
        
    }, []);

    const handleSearchClick=(searchText)=>{
        /*if(data?.length){
            const filteredData=data.filter((item)=>{
                return item.name.toLowerCase().includes(searchText)
                    || item.username.toLowerCase().includes(searchText)
                    || item.email.toLowerCase().includes(searchText)
                    || item.id===searchText
            });
            setSearchResults(filteredData);

            setActiveSearch(true);
        }*/
    };

    const handleClearClick=()=>{
        setActiveSearch(false);
        // setSearchResults([]);
    };

    return (
        <div className='container'>
            <SearchBox onSearch={handleSearchClick} onClear={handleClearClick} activeSearch={activeSearch} />
            <SearchResults pokemons={pokemons} metadata={metadata} activeSearch={activeSearch} />
        </div>
    );
}