import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ callback, keyword }) {
    console.log('rendering.... SerchaBar');

    const handleChange = function(e) {
        callback(e.target.value);
    }

    return (
        <div className={ 'Searchbar' }>
            찾기: <input
                    type='text'
                    placeholder='search'
                    value={ keyword }
                    onChange={ handleChange } />
        </div>
    );    
}

SearchBar.propTypes = {
    callback: PropTypes.func.isRequired, 
    keyword: PropTypes.string.isRequired
}