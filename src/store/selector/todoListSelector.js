import filterTodoByCompleted from "../../utils/filterTodoByCompleted";

export const todos = state => state.todos.todos
export const hash = state => state.filter

export const filteredTodosSelector = (state) => {
  switch (state.filter){
    case '#/active':
      return filterTodoByCompleted(state.todos.todos, false);
      case '#/completed':
        return filterTodoByCompleted(state.todos.todos, true);
      case '#/':
      default:
        return state.todos.todos;
  }
}
