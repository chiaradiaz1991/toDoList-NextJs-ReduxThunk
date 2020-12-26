// add Task
export const addTask = (task) => (dispatch) => {
  return dispatch({
    type: "ADD_TASK",
    value: task,
  });
};
