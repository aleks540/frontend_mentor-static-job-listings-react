import React from 'react';
import "./SearchTagButton.css"

export default function SearchTagButton({ label, onRemove }) {

    return (
        <div className="SearchTagButton">
            <span className='searchTagText'>{label}</span>
            <button className='searchTagClose'  onClick={onRemove}> &times;</button>
        </div>
    )
}

