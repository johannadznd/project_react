const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: Number(state.value) + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "UPDATE":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
