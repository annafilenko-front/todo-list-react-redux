export function initialTodoList() { 
  const parsedTodos = JSON.parse(localStorage.getItem('todos')) || []
  return parsedTodos
}
