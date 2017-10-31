import React from 'react';
import Title from './Title';
import Objective from './Objective';
import InfoRegion from './InfoRegion';

export default ({
  user, onUserEdit, onUserActivate,
  objective, onObjectiveEdit, onObjectiveActivate}) => {
  return (
    <header>
      <InfoRegion
        details={['phone', 'email']}
        srcObj={user}
        onEdit={onUserEdit}
        onActivate={onUserActivate} />
      <Title
        editing={user.editing && user.editingValue==='name'}
        title={user.name}
        onEdit={onUserEdit.bind(null, 'name')}
        onTitleClick={onUserActivate.bind(null, 'name')}
        className='main-title' />
      <Objective
        editing={objective.editing}
        text={objective.text}
        onEdit={onObjectiveEdit}
        onClick={onObjectiveActivate}/>
    </header>
  )
}