import './App.css';
import Header from './components/header/Header';
import JobCard from './components/jobCard/JobCard';

//import { jobData } from "../../data/data.js"

function App() {
  return (
   <>
   <Header/>
   <main>
  {/*  {jobData.map(product => (
            <JobCard key={product.id} product={product} />
          ))} */}
    <JobCard/>
   </main>
   
   </>
  );
}

export default App;
