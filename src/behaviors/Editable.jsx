// creates an inline editing interface

import React, {Component} from 'react';

// Creates an editable interface for Text based elements
//  Note: `elType` is expecting [`hn`, `span`, or `a`]
export default ({editing, elType, value, onEdit, ...props}) => {
  if (editing) {
    // return an editing interface
    return <Edit value={value} onEdit={onEdit} elType={elType} {...props}/>;
  }
  // return an element with the given props and value
  return React.createElement(elType, props, value);
}

// The <Edit> class is an text input bound to the component implementing
//  the <Editable> interface(?), and it will use the `onEdit` function to update
//  the component's value.
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
    if (this.props.onEdit) this.props.onEdit(value);
  }
}
