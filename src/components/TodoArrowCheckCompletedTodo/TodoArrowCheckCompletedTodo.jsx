import React from 'react'
import cl from '../TodoArrowCheckCompletedTodo/TodoArrowCheckCompletedTodo.module.css'
import { useDispatch } from 'react-redux'
import { completeAllAction } from '../../store/action/todoAction'

const TodoArrowCheckCompletedTodo = ({isChecked}) => {
  const dispatch = useDispatch()

  const completeAll = () => {
    dispatch(completeAllAction())
  };
  return (
    <div>
      <input
        checked={isChecked}
        id="toggle-all"
        className={cl.toggleAll}
        type="checkbox"
        onChange={completeAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </div>
  )
}

export default TodoArrowCheckCompletedTodo
