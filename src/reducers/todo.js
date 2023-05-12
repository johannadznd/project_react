const initialState = {
  todos: [],
  loading: false,
  error: null,
  output : {}
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO_STARTED":
      return { ...state, loading: true };
    case "GET_TODO_SUCCESS":
      return { ...state, loading : false, error : null , todos : [...state.todos, ...action.payload]};
    case "GET_TODO_FAILED":
        return { ...state, loading : false, error : action.payload};
    case "GET_TODO_OUTPUT":
      return { ...state, loading : false, error : null , output : action.payload};
    default:
      return state;
  }
};

export default todoReducer;
