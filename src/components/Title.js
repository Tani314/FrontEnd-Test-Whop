import React, { useContext } from 'react';
import ListsContext from '../context';

export default function Title({ title }) {
  const { dispatch } = useContext(ListsContext);

  return (
    <div >
      <p>{title.text}</p>
      <div >
        <button
          onClick={() => dispatch({ type: 'SET_CURRENT_TITLE', payload: title })}
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_TITLE', payload: title.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
