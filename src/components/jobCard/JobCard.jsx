import React from 'react';
import "./JobCard.css"
import { jobs } from "../../data/data.js"




const JobCard = () => {

    return (
        <div className='jobCard'>
            {/* <p className='company'>Company</p>
            <p className='position'>Position</p>
            <div className='jobInfos'>
                <p className="postedAt">1d ago</p>
                <p className="contract">Full Time</p>
                <p className="location">USA Only</p>
            </div>
*/}

            {jobs.length === 0 ? (
                <p>No jobs found</p>
            ) : (

                <>
                    {jobs.map((job, index) => {
                        const { company, position, } = job
                        return (
                            <>
                            {/* 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{company}</td>
                                <td>{position}</td>

                            </tr> */}
                            
                            <p className='company'>{company}</p>
                            <p className='position'>{position}</p>

                            </>
                        )
                    })}
                </>

            )}
        </div>


    )
}

export default JobCard