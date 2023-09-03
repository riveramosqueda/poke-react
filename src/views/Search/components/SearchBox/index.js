import {useState} from 'react';

export default function SearchBox({onSearch, onClear, activeSearch}){
    const [searchText, setSearchText]=useState('');

    const handleSearchClick=()=>{
        if(searchText.length){
            onSearch(searchText);
        }
    }

    const handleClearClick=()=>{
        setSearchText('');
        onClear();
    }

    return (
        <div className='mt-5'>
            <h1>Search</h1>
            <div className='mt-5'>
                <div className="input-group mb-3">
                    <label>
                        <input className='form-control' value={searchText} onChange={(event)=>{setSearchText(event.target.value)}} placeholder='Type your search...' />
                    </label>
                    <button className='btn btn-primary' onClick={handleSearchClick}>Go</button>
                </div>
                {activeSearch && <button className='btn btn-secondary m-2' onClick={handleClearClick}>Clear</button>}
            </div>
        </div>
    );
}