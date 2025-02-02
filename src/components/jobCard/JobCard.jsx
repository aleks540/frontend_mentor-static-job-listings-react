import React, { useState } from 'react';
import "./JobCard.css"
/* import photosnapLogo from "../../img/photosnap.svg"; */
import { useMediaQuery } from '@mui/material';



const JobCard = ({ job, setTags }) => {
    const isMobile = useMediaQuery("(max-width: 439px)");
    const { company, logo, position, postedAt, contract, location, languages, tools, new: isNew, featured: isfeatured } = job
    const tags = [...languages, ...tools];

    const searchTag = (tag) => {

        setTags((prevTags) => {

            if (prevTags.includes(tag)) {
                return prevTags;
            }
            
            return [...prevTags, tag];
            
        });
        
    };

    return (
        <div className="job-card">
            <div className='leftContent'>
                <img src={logo} alt={`${company} Logo`} className="job-logo" />
                <div className="jobInfoContainer">
                    <div className="firstLine">
                        <p className='company'>{company}</p>
                        {isNew && <div className='newTag'>NEW!</div>}
                        {isfeatured && <div className='featuredTag'>FEATURED</div>}

                    </div>
                    <p className='position'>{position}</p>
                    <div className='jobinfo'>
                        <span>{postedAt} • {contract} • {location}</span>
                    </div>
                </div>
            </div>
            {isMobile && <hr />}

            <div className='languageTags'>
                {tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag" label={tag} onClick={() => searchTag(tag)}>{tag}</span>
                ))}
            </div>

        </div>




    )
}

export default JobCard