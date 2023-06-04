import React from 'react'

// data
import data from '../../server/data.json'

//components
import JobCard from './JobCard';


function MainContent() {
  const {jobs_results: jobResults} = data;
  return (
      <>
        <div className='row'>
          {jobResults.map( job => (
            <JobCard 
              jobData ={job}
            />
          ))}
        </div>
      </>
  )
}

export default MainContent