import React, { useContext } from 'react';
import Title from './Title';
import ListsContext from '../context';

export default function Lists() {
  const { state } = useContext(ListsContext);
  return (
    <div>
      {state.titles.map((title, i) => {
        return <Title title={title} key={i} />;
      })}
    </div>
  );
}