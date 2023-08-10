import React from 'react';

export const ContactList = ({ data, onDelete }) => {
  return (
    <ul>
      {data.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => onDelete(id)}>
              {/* if we want to pass an argument we should use an anonimous function, like above */}
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
