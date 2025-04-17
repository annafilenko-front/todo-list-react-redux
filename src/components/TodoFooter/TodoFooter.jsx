import React from 'react'
import cl from '../TodoFooter/TodoFooter.module.css'
import navItems from '../../const/footerLinkNavigationConst'
import { useDispatch, useSelector } from 'react-redux'
import { hash } from '../../store/selector/todoListSelector'
import { filterActions } from '../../store/action/filterActions'
import filterTodoByCompleted from '../../utils/filterTodoByCompleted'
import { removeCompletedTodoAction } from '../../store/action/todoAction'

const TodoFooter = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const filterValue = useSelector(hash);
  const completedTodoCounter = filterTodoByCompleted(todos, false).length;

  const changeFilter = (filter) => {
    window.location.hash = filter;
    dispatch(filterActions(filter));
  }

  const removeCompletedTodo = () => {
    dispatch(removeCompletedTodoAction())
  };

  return (
    <footer className={cl.footer}>
      <span className={cl.todoCount}>
        {`${completedTodoCounter} items left`}
      </span>
      <ul className={cl.filters}>
        {
          navItems.map(item => (
            <li key={item.hash}>
              <a 
                href={item.hash} 
                className={filterValue === item.hash ? cl.selected : ''}
                onClick={() => changeFilter(item.hash)}
              >{item.label}</a>
            </li>
          ))
        }
      </ul>
      <button
        className={cl.clearCompleted}
        onClick={removeCompletedTodo}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default TodoFooter
