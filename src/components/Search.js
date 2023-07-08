import React, { useRef } from 'react';
// Import createSearchParams
// Import useNavigate
import { useNavigate, createSearchParams } from 'react-router-dom';

function Search() {

    const navigate = useNavigate();
    const searchInputRef = useRef();

    function onSearchHandler(e) {
        e.preventDefault();

        const searchQuery = {
            name: searchInputRef.current.value
          }
      
          // use createSearchParams 
        const query = createSearchParams(searchQuery);

        navigate({
            pathname: '/search',
            search: `?${query}`
        })
        
    }

    return (
        <form onSubmit={onSearchHandler} className="search-form">
            <input type = "text" className="search" placeholder="Search..." ref={searchInputRef}/>
        </form>
    )
}

export default Search;