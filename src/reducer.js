import * as uuid from 'uuid'

export default function reducers(state, action) {
  switch (action.type) {
    case 'CREATE_LIST':
      const newTitle = {
        id: uuid.v4(),
        text: action.payload
      };
      const createdList = [...state.titles, newTitle];
      return {
        ...state,
        titles: createdList
      };
    case 'UPDATE_TITLE':
      const updatedTitle = {
        ...state.currentTitle,
        text: action.payload
      };
      const updatedTitleIndex = state.titles.findIndex(
        title => title.id === state.currentTitle.id
      );
      const updatedTitles = [
        ...state.titles.slice(0, updatedTitleIndex),
        updatedTitle,
        ...state.titles.slice(updatedTitleIndex + 1)
      ];
      return {
        currentTitle: null,
        titles: updatedTitles
      };
    case 'DELETE_TITLE':
      const deletedTitles = state.titles.filter(
        title => title.id !== action.payload
      );
      return {
        ...state,
        titles: deletedTitles
      };
    case 'SET_CURRENT_TITLE':
      return {
        ...state,
        currentTitle: action.payload
      };
    default:
      return state;
  }
}