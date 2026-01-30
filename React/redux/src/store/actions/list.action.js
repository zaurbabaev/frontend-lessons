export const addToListAction = (payload) => {
  return {
    type: "ADD_TO_LIST",
    payload,
  };
};

export const removeFromListAction = (payload) => {
  return {
    type: "REMOVE_FROM_LIST",
    payload,
  };
};


