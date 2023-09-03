import SearchBox from './components/SearchBox';
import DemoData from '../../data/users.json'
import { useState } from 'react';
import SearchResults from './components/SearchResults';

export default function Search(){
    const [data]=useState(DemoData);
    const [activeSearch, setActiveSearch]=useState(false);
    const [searchResults,setSearchResults]=useState([]);

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
        <div>
            <SearchBox onSearch={handleSearchClick} onClear={handleClearClick} activeSearch={activeSearch} />
            <SearchResults searchResults={searchResults} activeSearch={activeSearch} />
        </div>
    );
}