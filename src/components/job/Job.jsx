import React from 'react';
import Editable from '../../behaviors/Editable';

// Currently <Job> is a very simple view
//  that is being fully controlled by <JobList> view.
export default ({job, onJobClick, onEdit, onDelete, ...props}) => {
  const {id, editing, employer, location} = job;
  return (
    <div onClick={onJobClick.bind(null, id)} className="job-item" {...props} >

      <Editable
        editing={editing}
        elType='h1'
        value={employer}
        onEdit={onEdit.bind(null, id, 'employer')} />
      <p>{location.city}, {location.state}</p>
      <button onClick={onDelete.bind(null, id)}>X</button>
    </div>
  )
}
