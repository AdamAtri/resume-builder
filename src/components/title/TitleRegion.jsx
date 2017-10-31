import React from 'react';
import Title from './Title';
import Objective from './Objective';

export default ({
  user, onUserEdit, onUserActivate,
  objective, onObjectiveEdit, onObjectiveActivate}) => {
  return (
    <header>
      <Title
        editing={user.editing}
        title={user.name}
        onEdit={onUserEdit}
        onTitleClick={onUserActivate}
        className='main-title' />
      <Objective
        editing={objective.editing}
        text={objective.text}
        onEdit={onObjectiveEdit}
        onClick={onObjectiveActivate}/>
    </header>
  )
}
