import React, { useContext, useReducer } from 'react';
import EditList from './components/EditList';
import ListsContext from './context';
import reducers from './reducer';
import Home from './components/Home'
function App() {
  const initialState = useContext(ListsContext);
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <ListsContext.Provider value={{ state, dispatch }}>
      {state.currentTitle === null?
      <div>
        <Home/>
      </div>
     : (
        <EditList />
      )}
    </ListsContext.Provider>
  );
}

export default App;