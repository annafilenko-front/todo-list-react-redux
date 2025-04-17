import React, { useState } from 'react'
import cl from '../CreateTodoInput/CreateTodoInput.module.css'
import { useDispatch } from 'react-redux'
import { createTodoAction } from '../../store/action/todoAction'

const CreateTodoInput = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const createTodo = (newTodoTitle) => {
    dispatch(createTodoAction(newTodoTitle))
  };

  const handleCreateTodo = (e) => {
    const text = e.target.value.trim();

    if(!text) return;

    if(e.type === 'blur' || e.key === 'Enter'){
      e.preventDefault()
      createTodo(text)
      setInputValue('')
    }
  }

  return (
    <input 
      value={inputValue}
      className={cl.newTodo} 
      placeholder="What needs to be done?"
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={(e) => {handleCreateTodo(e)}}  
      onKeyDown={(e) => {handleCreateTodo(e)}}
    />
  )
}

export default CreateTodoInput
