export const countReducer = (state = 0, action) => {
  if (action.type === "DECREASE") {
    return state - action.payload;
  } else if (action.type === "INCREASE") {
    return state + action.payload;
  }
  return state;
};
