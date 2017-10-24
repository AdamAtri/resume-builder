// creates an inline editing interface

import React, {Component} from 'react';

// const Edit = ({onEdit=()=>{}, elType, value, ...props}) => (
//   <div onClick={onEdit} {...props}>
//   <span>edit: {value}</span>
//   </div>
// );

// const Edit = ({onEdit=()=>{}, elType, value, ...props}) => (
//   <div onClick={onEdit} {...props}>
//     {React.createElement(elType, null, `editing: ${value}`)}
//   </div>
// );

class Edit extends Component {

  render() {
    const {elType, value, onEdit, ...props} = this.props;
    return (
      <input
        type="text"
        autoFocus={true}
        defaultValue={value}
        onBlur={this.finishEdit.bind(this)}
        onKeyPress={this.checkEnter.bind(this)}
        {...props}
      />
    );
  }

  checkEnter(e) {
    if (e.key === 'Enter') this.finishEdit(e);
  }

  finishEdit(e) {
    const value = e.target.value;
    const {attr} = this.props;
    if (this.props.onEdit) this.props.onEdit(attr, value);
  }
}

// Creates an editable interface for Text based elements
//  Note: `elType` is expecting [`hn`, `span`, or `a`]
export default ({editing, elType, attr, value, onEdit, ...props}) => {
  if (editing) {
    // return an editing interface
    return <Edit attr={attr} value={value} onEdit={onEdit} elType={elType} {...props}/>;
  }
  // return an element with the given props and value
  return React.createElement(elType, props, value);
}
