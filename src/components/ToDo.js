import React from 'react';
import { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

function ToDo() {
    const [allTodo, setAllTodo] = useState([]);
    const [todo, setTodo] = useState({
      id: null,
      title: null,
      message: null,
      completed: false,
    })
  
    let count = allTodo.length;
  
    const addSingleTodo = (todo) => {
      setAllTodo([...allTodo,todo])
    }
  
    const onChecked = (id) => {
      const newTodos = allTodo
  
      let toChange = newTodos[id]
  
      toChange.completed = !toChange.completed
  
      newTodos[id] = toChange
  
      setAllTodo([...newTodos])
    }
  
    return (
      <div className="App">
        <Typography variant="h5">To Do</Typography>
        <form onSubmit = {e => {
          e.preventDefault();
          addSingleTodo({
            ...todo,
            id: count++,
          })
        }
        }>
          <input
            type="textbox"
            id="todo-title"
            value={todo.title}
            placeholder="write todo title here"
            onChange={e => setTodo({
              ...todo,
              title: e.target.value
            })}
          />
          <input
            type="textbox"
            id="todo-message"
            value={todo.message}
            placeholder="write todo message here"
            onChange={e => setTodo({
              ...todo,
              message: e.target.value
            })}
          />
  
          <input type = "submit" />
          
        </form>
  
        {
            allTodo.length > 0 ?
              allTodo.map(todo =>
                <div key={todo.id}>
                  <input
                  name ={todo.id}
                    type="checkbox"
                    id={todo.id}
                    checked={todo.completed}
                    onChange={() => onChecked(todo.id)}
                  >
                  </input>
                  <label htmlFor={todo.id}>Title: {todo.title} Message: {todo.message} </label>
                </div>)
  
              :
              <h2>No Todos Yet</h2>
          }
  
      </div>
    );
  }

export default ToDo
