import React, { useState, useContext, useRef, useEffect } from 'react';
import ListsContext from '../context';
import Home from './Home';
import {FaAngleLeft} from 'react-icons/fa';

export default function EditList() {
  const { state, dispatch } = useContext(ListsContext);
  const initialValue = state.currentTitle.text
  const [value, setValue] = useState(state.currentTitle.text);
  const [showComponent, setShowComponent] = useState(true)

  let ref = useRef();

  useEffect(() => {
    if(ref.current){
      ref.current.focus();
    }
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

  const handleCancel=(e)=>{
  setValue('') ; 
  dispatch({ type: 'UPDATE_TITLE', payload: initialValue}); 
}

  return (
    <div >
      <div>
      <form onSubmit={handleSubmit} action=''>
        <textarea
          ref={ref}
          onChange={handleChange}
          value={value}
          name=''
          id=''
        />
        <div>
          <button>Done</button>
        </div>
      </form>
      <button onClick={handleCancel}><FaAngleLeft/>Cancel </button>
      </div>
    </div>
  );
}