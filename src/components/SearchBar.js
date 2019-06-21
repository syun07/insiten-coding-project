import React from 'react';
import { Search } from 'semantic-ui-react';

const SearchBar = (props) => {
    return(
        <Search 
            placeholder='Search...' 
            onSearchChange={(event) => props.handleSearch(event)} 
            showNoResults={false} />
    )
}

export default SearchBar;