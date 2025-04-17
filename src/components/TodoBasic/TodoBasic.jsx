/* eslint-disable array-callback-return */
import React, { useEffect} from 'react';
import cl from '../TodoBasic/TodoBasic.module.css';
import TodoList from '../TodoList/TodoList';
import CreateTodoInput from '../CreateTodoInput/CreateTodoInput';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoArrowCheckCompletedTodo from '../TodoArrowCheckCompletedTodo/TodoArrowCheckCompletedTodo';
import filterTodoByCompleted from '../../utils/filterTodoByCompleted';
import {useSelector } from 'react-redux';
import setItemToLocalStorage from '../../utils/setItemToLocalStorage';

const TodoBasic = () => {
  const todos = useSelector(state => state.todos.todos)

  useEffect(() => {
    setItemToLocalStorage('todos', todos);
  }, [todos]);

  return (
    <div className={cl.todoapp}>
      <h1>todos</h1>
      <CreateTodoInput/>
      <section className={`${cl.main} ${todos.length > 0 ? '' : cl.hidden}`}>
        <TodoArrowCheckCompletedTodo
          isChecked={todos.length === filterTodoByCompleted(todos, true).length}
        />
        <TodoList/>
        {
          todos.length ? <TodoFooter/> : null
        }
      </section>
    </div>
  );
};

export default TodoBasic;
