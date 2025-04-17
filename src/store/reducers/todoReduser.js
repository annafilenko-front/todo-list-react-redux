import {initialTodoList} from "../../utils/initialTodoList";
import filterTodoByCompleted from "../../utils/filterTodoByCompleted"
import {
  CREATE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  REMOVE_COMPLETED_TODO,
  COMPLETE_ALL
} from '../const/todoActionConst';
const defaultStateTodos = {
  todos: initialTodoList()
};

export const todoReducer = (state = defaultStateTodos, action) => {
  switch (action.type) {
    case CREATE_TODO:
      const newTodo = {
        id: Date.now(),
        title: action.newTodoTitle,
        completed: false
      }
      return { ...state, todos: [...state.todos, newTodo] }
    case REMOVE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.todoId)}
    case UPDATE_TODO:
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.todoId) {
          return { ...todo, title: action.newValue};
        }
        return todo;
      })}
    case TOGGLE_TODO:
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })}
    case REMOVE_COMPLETED_TODO:
      return {...state, todos: filterTodoByCompleted(state.todos, false)}
    case COMPLETE_ALL:
      const allCompleted = state.todos.length === filterTodoByCompleted(state.todos, true).length;
      return {...state, todos: [...state.todos].map(todo => ({
        ...todo,
        completed: !allCompleted
      }))}
    default:
      return state
  }
}