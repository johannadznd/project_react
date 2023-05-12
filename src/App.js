import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as fromCounterActions from "./action/counter";
import * as fromTodoActions from "./action/todo";
function App(props) {
  const todos = props.todos.todos;
  return (
    <>
      <h1 className="text-center text-2xl font-bold m-8">
        {props.counter.value}
      </h1>
      <div className="flex flex-row justify-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={() => props.decrement()}
        >
          -
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={() => props.increment()}
        >
          +
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        <label
          htmlFor="input"
          className="block mr-8 text-sm font-medium text-gray-900 dark:text-white"
        >
          Rentrez le nombre de votre choix
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
          name="input"
          type="number"
          id="input"
          onChange={(e) => props.update(e.target.value)}
          value={props.counter.value}
        />
      </div>
      <div className="flex flex-row justify-center m-4">
        <button
          onClick={() => props.getTodos()}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          GET TODOS
        </button>
        <button
          onClick={() => props.setTodos()}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          SET TODOS
        </button>
      </div>
      <h1 className="text-center text-2xl font-bold m-8">Liste des todos</h1>
      {todos ? (
        <ul>
          {todos.map((todo, index) => {
            return <li className="text-center m-2" key={index}>{todo.title}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer,
  todos: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(fromCounterActions.increment()),
  decrement: () => dispatch(fromCounterActions.decrement()),
  update: (input) => dispatch(fromCounterActions.update(input)),
  getTodos: () => dispatch(fromTodoActions.getTodo()),
  setTodos: () => dispatch(fromTodoActions.setTodo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
