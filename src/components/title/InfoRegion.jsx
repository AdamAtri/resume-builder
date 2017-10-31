import React from 'react';
import Editable from '../../behaviors/Editable';

const isLink = (value) => {
  if (isUrl(value)) return true;
  return isMail(value);
};
const isUrl = (value) => {
  const testUrl =
    new RegExp(/(http|https):\/\/(\w+)\.(com|net|org|gov|edu)(?:\/(.*))?/, 'gi');
  return testUrl.test(value);
};
const isMail = (value) => {
  const testMail =
    new RegExp(/([\w\.]+)@([\w\.]+(com|net|org|gov|edu)$)/, 'gi');
  return testMail.test(value);
}
export default ({details, srcObj, onEdit, onActivate, ...props}) => {
  return (
    <div>
      <ul>
        {details.map((detail) =>
          <li key={`${srcObj.id}_${detail}`}>
            <Editable
              editing={srcObj.editing && srcObj.editingValue === detail}
              elType={isLink(srcObj[detail]) ? 'a' : 'span'}
              value={srcObj[detail]}
              onEdit={onEdit.bind(null, detail)}
              onClick={onActivate.bind(null, detail)}
              {...props} />
          </li>
        )}
      </ul>
    </div>
  )
}
