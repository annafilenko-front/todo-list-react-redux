import React, { useEffect, useRef, useState } from 'react'
import cl from '../TodoItem/TodoItem.module.css'
import { useDispatch } from 'react-redux'
import { removeTodoAction, toggleTodoAction, updateTodoAction } from '../../store/action/todoAction'

const TodoItem = ({todo}) => {
  const [editing, setEditing] = useState(false)
  const inputEdit = useRef(null)
  const dispatch = useDispatch()

  const handleFocus = () => {
    inputEdit.current.focus()
  }

  const toggleTodo = (todoId) => {
    dispatch(toggleTodoAction(todoId))
  };

  const removeTodo = (todoId) => {
    dispatch(removeTodoAction(todoId))
  };

  const updateTodo = (newValue, todoId) => {
    dispatch(updateTodoAction(newValue, todoId))
  }

  const handleUpdateTodo = (e, todoId) => {
    const newText = e.target.value.trim();

    if(!newText) return;

    if(e.type === 'blur' || e.key === 'Enter'){
      if(newText !== todo.title) {
        e.preventDefault();
        updateTodo(newText, todoId);
      }
      
      setEditing(false)
    }
  }

  useEffect(() => {
    if (editing) {
      handleFocus()
    }
  }, [editing])
  
  return (
    <li className = {`${cl.todoItem} ${editing ? cl.editing : ''}`}>
      <div className={editing ? cl.hidden : ''}>
          <input 
            className={cl.toggle}
            checked = {todo.completed ? true : false} 
            type='checkbox'
            onChange = {() => toggleTodo(todo.id)}
          />
        <label 
          onDoubleClick={() => setEditing(true)}
          className={todo.completed ? cl.completed : ''}
        >
          {todo.title}
        </label>
        <button 
          className={cl.destroy}
          onClick={() => removeTodo(todo.id)}
        >
        </button>
      </div>
      <input 
        ref={inputEdit}
        className= {cl.edit}
        defaultValue={todo.title}
        onKeyDown={(e) => handleUpdateTodo(e, todo.id)}
        onBlur={(e) => handleUpdateTodo(e, todo.id)}
      />
    </li>
  )
}

export default TodoItem
