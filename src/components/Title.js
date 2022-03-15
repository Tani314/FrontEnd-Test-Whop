import React, { useContext, useRef } from 'react';
import ListsContext from '../context';
import pen from '../assets/pen.png';
import trashcan from '../assets/trashcan.png';
import { useOutsideClick } from './UseOutsideClick';
import { FiMoreHorizontal } from 'react-icons/fi';
import "./styles.css";

export default function Title({ title }) {
  const { dispatch } = useContext(ListsContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);
  const titleClicked = () => setIsActive(!isActive);
  const afterDelete=()=>{
    dispatch({ type: 'DELETE_TITLE', payload: title.id })
    setIsActive(!isActive)
  }

  return (
    <div >
      <div>

        <span>{title.text}</span>
        <button onClick={titleClicked}>
          <FiMoreHorizontal />
        </button>
        <div ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}>
          <div
            onClick={() => dispatch({ type: 'SET_CURRENT_TITLE', payload: title })}
          >
            <img src={pen} alt={pen} />
          Edit
        </div>
          <div
            onClick={afterDelete}
          >
            <img src={trashcan} alt={trashcan} />
          Delete
        </div>
        </div>

      </div>
    </div>
  );
}
