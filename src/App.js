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


  return (
    <>
      <Header />
      { <SearchBar tags={tags} setTags={setTags}/>}
 
      <main>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} setTags={setTags} />
        ))}
      </main>

    </>
  );
}

export default App;
