import React from 'react';
import Editable from '../../behaviors/Editable';

export default ({title, editing, onEdit, onTitleClick, ...props}) => {
  return (
    <Editable
      editing={editing}
      elType='h1'
      value={title}
      onEdit={onEdit}
      onClick={onTitleClick}
      {...props} />
  )
}
