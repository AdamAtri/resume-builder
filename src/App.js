import React, { Component } from 'react';
import { JobList } from './components';

import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          id: uuid.v4(),
          employer: 'VoiceThread',
          location: {city:'Durham', state:'NC'},
          start: '15-OCT-2014',
          end: 'present',
          editing: false
        },
        {
          id: uuid.v4(),
          employer: 'Powersolve',
          location: {city:'Garner', state:'NC'},
          start: '2-JAN-2013',
          end: '1-JUN-2014',
          editing: false
        }
      ]
    };

    this.addJob = this.addJob.bind(this);
    this.editJob = this.editJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.activateJobEditing = this.activateJobEditing.bind(this);
  }

  addJob() {
    this.setState({
      jobs: this.state.jobs.concat([{
        id: uuid.v4(),
        employer: 'Unknown',
        location: {city:'Unknown', state:'NC'},
        title:'Unknown',
        responsibilities:'Unknown',
        start: 'Unknown',
        end: 'Unkown',
        editing: false
      }])
    });
  }

  deleteJob(jobId, e) {
    e.stopPropagation();
    this.setState({
      jobs: this.state.jobs.filter( job => job.id !== jobId )
    });
  }

  activateJobEditing(jobId) {
    this.setState({
      jobs: this.state.jobs.map( job => {
        job.editing = job.id === jobId;
        return job;
      })
    });
  }

  editJob(jobId, attr, value) {
    this.setState({
      jobs: this.state.jobs.map( job => {
        if (job.id === jobId) {
          job.editing = false;
          job[attr] = value;
        }
        return job;
      })
    });
  }

  render() {
    const {jobs} = this.state;
    return (
      <div className="App">
        <button className="add-job" onClick={this.addJob}>+</button>
        <JobList
          jobs={jobs}
          onJobClick={this.activateJobEditing}
          onEdit={this.editJob}
          onDelete={this.deleteJob} />
      </div>
    );
  }



}

export default App;
