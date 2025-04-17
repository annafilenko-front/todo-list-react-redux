import React from 'react'
import cl from '../TodoList/TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem'
import { useSelector } from 'react-redux'
import { filteredTodosSelector} from '../../store/selector/todoListSelector'

const TodoList = () => {
  const filteredTodos = useSelector(filteredTodosSelector)
 
  return (
    <div>
      <ul className={cl.todoList}>
        {filteredTodos.map((todo) =>
          <TodoItem 
            key={todo.id}
            todo={todo}
          />
        )}
      </ul>
    </div>
  )
}

export default TodoList
