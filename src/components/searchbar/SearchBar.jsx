import React, { useState } from 'react';
import "./SearchBar.css";
import SearchTagButton from '../buttons/SearchTagButton';

const SearchBar = ({ tags, setTags }) => {
    /*  const [tags, setTags] = useState([]); */

    const removeAllTag = () => {
        setTags([]);
    };


    const removeTag = (tagToRemove) => {
        setTags((prevTags) => prevTags.filter(tag => tag !== tagToRemove));
    };



    return (
        <div className='searchBarContainer'>
            <div className='searchTagsWrapper'>
                {tags.map((tag, index) => (
                    <SearchTagButton key={index} label={tag} onRemove={() => removeTag(tag)} />
                ))}
            </div>
            <button className="removeSearch" onClick={removeAllTag}>Clear</button>
        </div>
    )
}

export default SearchBar