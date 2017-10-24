import React, {Component} from 'react';

class BaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      address:"",
      phone:"",
      email:"",
      objective:"",
      ed: [ ],
      emp: [ ],
      tech: [ ],
      interests: [ ]
    };

  }
}
