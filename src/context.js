import React from 'react';

const ListsContext = React.createContext({
  currentTitle: null,
  titles: [],
});

export default ListsContext;