import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import JobCard from './components/jobCard/JobCard';

import  jobData  from "./data/data.json"

function App() {
  const [jobs, setJobs] = useState([]);
  

/*   useEffect(() => {
    fetch(jobData) // JSON aus `public/` laden
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Fehler beim Laden der Daten:", error));
  }, []); */
  useEffect(() => {
    setJobs(jobData); 
  }, []);
  return (
    <>
      <Header />
      <main>

        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {/* <JobCard/> */}
      </main>

    </>
  );
}

export default App;
