const getTodoSuccess = (todo) => ({
  type: "GET_TODO_SUCCESS",
  payload: todo,
});

const getTodoOuput = (todo) => ({
  type: "GET_TODO_OUTPUT",
  payload: todo,
});

const getTodoStarted = () => ({
  type: "GET_TODO_STARTED",
});

const getTodoFailed = (error) => ({
  type: "GET_TODO_FAILED",
  payload: error,
});

export const getTodo = () => {
  return async (dispatch) => {
    dispatch(getTodoStarted());
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });
    const todos = await response.json();
    dispatch(getTodoSuccess(todos));
  };
};

export const setTodo = () => {
  return async (dispatch) => {
    dispatch(getTodoStarted());
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "lorem",
        id: "1",
        userId: 1,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todos = await response.json();
    dispatch(getTodoOuput(todos));
  };
};
