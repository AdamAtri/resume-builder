import React from 'react';
import Editable from '../../behaviors/Editable';

export default ({editing, text, onEdit, ...props}) => {
  return (
    <Editable
      editing={editing}
      elType='h6'
      value={text}
      onEdit={onEdit}
      className='objective-text'
      {...props} />
  )
}
