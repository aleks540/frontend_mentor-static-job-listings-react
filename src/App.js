import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import JobCard from './components/jobCard/JobCard';

import jobData from "./data/data.json"
import SearchBar from './components/searchbar/SearchBar';

function App() {
  const [jobs, setJobs] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setJobs(jobData);
  }, []);

  const filteredJobs = jobData.filter(job => {
    if (tags.length === 0) return true; 

    const jobTags = [...job.languages, ...job.tools]; 
    return tags.every(tag => jobTags.includes(tag)); 
});


  return (
    <>
      <Header />
      { <SearchBar tags={tags} setTags={setTags}/>}
 
      <main>

        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} setTags={setTags} />
        ))}
      </main>

    </>
  );
}

export default App;
