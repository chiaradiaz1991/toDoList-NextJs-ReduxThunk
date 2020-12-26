import { combineReducers } from "redux";

// INITIAL TIMER STATE
const initialState = {
  tasks: [],
};
// TIMER REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return Object.assign({}, state, {
        tasks: [...state.tasks, action.value],
      });
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  reducer: reducer,
};

export default combineReducers(reducers);
