import React from 'react'

function SearchNote(props) {
    return (
        <input 
            type="text"
            value=""
            placeholder="🔍 search your note..."
            className="searchNote"
            onChange={(event) => {
                
            }}
        />
    )
}

export default SearchNote
