import React, { Component } from 'react';
import { JobList, TitleRegion } from './components';

import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{
        id: uuid.v4(),
        name:'Your Name',
        email: 'your.email@domain.tld',
        phone: '(999) 999-9999',
        editing: false,
        editingValue: null
      }],
      objective: [{
        id: uuid.v4(),
        text: 'Lorem ipsum dolorat qui ibsem',
        editing: false
      }],
      jobs: [
        {
          id: uuid.v4(),
          employer: 'VoiceThread',
          location: {city:'Durham', state:'NC'},
          start: '15-OCT-2014',
          end: 'present',
          editing: false,
          editingValue: null
        },
        {
          id: uuid.v4(),
          employer: 'Powersolve',
          location: {city:'Garner', state:'NC'},
          start: '2-JAN-2013',
          end: '1-JUN-2014',
          editing: false,
          editingValue: null
        }
      ]
    };

    const { user, objective } = this.state;
    this.editUser =
      this.edit.bind(this, 'user', user[0].id);
    this.activateUser =
      this.activate.bind(this, 'user', user[0].id);
    this.editObjective =
      this.edit.bind(this, 'objective', objective[0].id, 'text');
    this.activateObjective =
      this.activate.bind(this, 'objective', objective[0].id);

    this.addJob = this.addJob.bind(this);
    this.editJob = this.edit.bind(this, 'jobs');
    this.deleteJob = this.deleteJob.bind(this);
    this.activateJobEditing = this.activate.bind(this, 'jobs');
  }

  edit(table, id, attr, value) {
    console.log('using edit function');
    this.setState({
      [table]: this.state[table].map(obj => {
        if (obj.id === id) {
          obj.editing = false;
          obj[attr] = value;
        }
        return obj;
      })
    });
  }

  activate(table, id, attr) {
    console.log('using activate function');
    this.setState({
      [table]: this.state[table].map( obj => {
        obj.editing = obj.id === id;
        if (obj.editing && attr) obj.editingValue = attr;
        return obj;
      })
    });
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

  render() {
    const {jobs, user, objective} = this.state;
    return (
      <div className="App">
        <TitleRegion
          user={user[0]}
          onUserEdit={this.editUser}
          onUserActivate={this.activateUser}
          objective={objective[0]}
          onObjectiveEdit={this.editObjective}
          onObjectiveActivate={this.activateObjective} />

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
