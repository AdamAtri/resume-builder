import React from 'react';
import Editable from '../../behaviors/Editable';

const isUrl = (value) => {
  const testUrl =
    new RegExp(/(http|https):\/\/(\w+)\.(com|net|org|gov|edu)(?:\/(.*))?/, 'gi');
  return testUrl.test(String(value));
};
const isMail = (value) => {
  const testMail =
    new RegExp(/([\w\.]+)@([\w\.]+(com|net|org|gov|edu)$)/, 'gi');
  return testMail.test(String(value));
}
export default ({details, srcObj, onEdit, onActivate, ...props}) => {
  return (
    <div>
      <ul>
        {details.map((detail) => {
          const href =
            isUrl(srcObj[detail]) ? srcObj[detail] :
            isMail(srcObj[detail]) ? `mailto:${srcObj[detail]}` : null;
          props['href'] = href;
          return (
            <li key={`${srcObj.id}_${detail}`}>
              <Editable
                editing={srcObj.editing && srcObj.editingValue === detail}
                elType={href ? 'a' : 'span'}
                value={srcObj[detail]}
                onEdit={onEdit.bind(null, detail)}
                onClick={onActivate.bind(null, detail)}
                {...props} />
            </li>
          )}
        )}
      </ul>
    </div>
  )
}
