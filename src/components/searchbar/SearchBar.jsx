import React, { useState } from 'react';
import "./SearchBar.css";
import SearchTagButton from '../buttons/SearchTagButton';

const SearchBar = () => {
    const [tags, setTags] = useState(["Frontend"]);
    const removeTag = () => {
        setTags([]);
      };

    return (
        <div className='searchBarContainer'>
            <div className='searchTagsWrapper'>
            {tags.map((tag, index) => (
        <SearchTagButton key={index} label={tag} onRemove={removeTag} />
      ))}
            </div>
            <div className="exitSearch">clear</div>
        </div>
    )
}

export default SearchBar