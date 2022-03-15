import React, { useState, useContext, useRef, useEffect } from 'react';
import ListsContext from '../context';
import Home from './Home';
import {FaAngleLeft} from 'react-icons/fa';

export default function CreateList({show}) {
  const { state, dispatch } = useContext(ListsContext);
  const [value, setValue] = useState('');
  const [showChange,setShowChange]= useState(true);
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
      dispatch({ type: 'CREATE_LIST', payload: value });
      show();
      setValue('');
    }
  };
  const handleCancel=(e)=>{
    e.preventDefault();
    setShowChange(false);
    show();
}

  return (
    <div>
      { showChange ?
      <form onSubmit={handleSubmit} action=''>
        <input type='text' ref={ref} onChange={handleChange} value={value} placeholder="List Item" />
        <button onClick={handleCancel}><FaAngleLeft/>Cancel </button>
        <button>Done</button>
      </form>
      :
      <Home/>
}
    </div>
  );
}