export const increaseCountAction = (payload) => {
  return {
    type: "INCREASE",
    payload,
  };
};

export const decreaseCountAction = (payload) => {
  return {
    type: "DECREASE",
    payload,
  };
};


