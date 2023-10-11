import SearchBox from './components/SearchBox';
// import DemoData from '../../data/users.json'
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';
import axios from 'axios';
import { useContext } from 'react';
import PokemonContext from '../../context/pokemons';

export default function Search(){
    const [data,setData]=useState([]);
    const [activeSearch, setActiveSearch]=useState(false);
    const [searchResults,setSearchResults]=useState([]);
    const {getPokemons, pokemons}=useContext(PokemonContext);

    useEffect(()=>{
        getPokemons().catch(null);
        
    }, []);

    console.log(pokemons);
    const handleSearchClick=(searchText)=>{
        if(data?.length){
            const filteredData=data.filter((item)=>{
                return item.name.toLowerCase().includes(searchText)
                    || item.username.toLowerCase().includes(searchText)
                    || item.email.toLowerCase().includes(searchText)
                    || item.id===searchText
            });
            setSearchResults(filteredData);

            setActiveSearch(true);
        }
    };
    const handleClearClick=()=>{
        setActiveSearch(false);
        setSearchResults([]);
    };

    return (
        <div className='container'>
            <SearchBox onSearch={handleSearchClick} onClear={handleClearClick} activeSearch={activeSearch} />
            <SearchResults searchResults={searchResults} activeSearch={activeSearch} />
        </div>
    );
}