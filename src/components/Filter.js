import React from 'react';

export const Filter = ({ filterContacts, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filterContacts}
        onChange={evt => onChangeFilter(evt.currentTarget.value)}
      />
    </label>
  );
};
