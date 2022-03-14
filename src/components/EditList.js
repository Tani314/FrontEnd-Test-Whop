import React, { useState, useContext, useRef, useEffect } from 'react';
import ListsContext from '../context';

export default function EditNote() {
  const { state, dispatch } = useContext(ListsContext);
  const [value, setValue] = useState(state.currentTitle.text);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      alert('Cannot add a blank list');
    } else {
      dispatch({ type: 'UPDATE_TITLE', payload: value });
      setValue('');
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} action=''>
        <textarea
          ref={ref}
          onChange={handleChange}
          value={value}
          name=''
          id=''
        />
        <div>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
}