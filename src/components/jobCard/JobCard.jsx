import React, { useState } from 'react';
import "./JobCard.css"
/* import photosnapLogo from "../../img/photosnap.svg"; */
import { useMediaQuery } from '@mui/material';



const JobCard = ({ job }) => {
    const isMobile = useMediaQuery("(max-width: 375px)");
    const { company, logo, position, postedAt, contract, location, languages, tools, new: isNew, featured:isfeatured } = job
    const tags = [...languages, ...tools];



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
                    <span key={tagIndex} className="tag">{tag}</span>
                ))}
            </div>

        </div>




    )
}

export default JobCard