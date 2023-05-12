export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const update = (x) => ({
  type: "UPDATE",
  payload: x,
});
