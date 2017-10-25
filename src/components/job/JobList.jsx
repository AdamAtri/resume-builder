import React from 'react';
import Job from './Job';

// A list view for displaying places of employment.

export default ({
  jobs,
  onJobClick=()=>{},
  onDelete=()=>{},
  onEdit=()=>{}
}) => (
  <ul>
    {jobs.map((job) =>
      <li key={job.id}>
        <Job
          job={job}
          onJobClick={onJobClick}
          onEdit={onEdit}
          onDelete={onDelete} />
      </li>
    )}
  </ul>
)
