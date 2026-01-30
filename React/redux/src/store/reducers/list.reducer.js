export const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      const foundItem = state.includes(action.payload);
      if (!foundItem) {
        return [...state, action.payload];
      }
      return state;
    case "REMOVE_FROM_LIST":
      return state.filter((item) => item != action.payload);
    default:
      return state;
  }
};
