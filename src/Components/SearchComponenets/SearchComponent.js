import React from 'react';
import "./SearchComponent.css"
const SearchComponent = () => {
    return (
        <div className='searchContainer'>
            <div>
                <p>A</p>
                <h1>Search</h1>
                <input className='searchInput' type='text' placeholder='search...'/>
            </div>
        </div>
    );
};

export default SearchComponent;