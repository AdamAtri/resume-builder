import React from 'react';
import Title from './Title';
import Objective from './Objective';
import InfoRegion from './InfoRegion';

import './title.css';

export default ({
  user, onUserEdit, onUserActivate,
  objective, onObjectiveEdit, onObjectiveActivate}) => {
  return (
    <div>
      <header className='title-container'>
        <Title
          editing={user.editing && user.editingValue==='name'}
          title={user.name}
          onEdit={onUserEdit.bind(null, 'name')}
          onTitleClick={onUserActivate.bind(null, 'name')} />
        <InfoRegion
          details={['phone', 'email']}
          srcObj={user}
          onEdit={onUserEdit}
          onActivate={onUserActivate} />
      </header>
      <Objective
        editing={objective.editing}
        text={objective.text}
        onEdit={onObjectiveEdit}
        onClick={onObjectiveActivate}/>
    </div>
  )
}
