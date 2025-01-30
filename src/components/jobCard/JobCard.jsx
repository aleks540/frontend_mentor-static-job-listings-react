import React from 'react';
import "./JobCard.css"
import { jobs } from "../../data/data.js"
import photosnapLogo from "../../img/photosnap.svg";



const JobCard = () => {
    return (
        <div className='jobCard'>
            {jobs.length === 0 ? (
                <p>No jobs found</p>
            ) : (
                <>
                    {jobs.map((job, index) => {
                        const { company, position, postedAt, contract, location, languages, tools } = job
                        const tags = [...languages, ...tools];
                        return (
                            <div key={index} className="job-card"> 
                              <img src={ photosnapLogo} alt={`${company} Logo`} className="job-logo" />
                                <p className='company'>{company}</p>
                                <p className='position'>{position}</p>
                                <div className='jobinfo'>
                                <span>{postedAt} • {contract} • {location}</span>
                                </div>
                                {<hr />}
                                <div className='languageTags'>
                                    {tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </>

            )}
        </div>


    )
}

export default JobCard