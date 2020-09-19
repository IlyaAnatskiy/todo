import React, { useState, useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import { Context } from './context';
import reducer from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')) || []);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle,
      });
      setTodoTitle('');
    }
  };

  return (
    <Context.Provider
      value={{
        dispatch,
      }}>
      <div className="container">
        <div className="input-group mb-3 mt-5">
          Добавить в список:
          <input
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
          />
        </div>
        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
