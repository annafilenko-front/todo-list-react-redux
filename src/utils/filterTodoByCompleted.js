const filterTodoByCompleted = (todoArr, state) => {
  if(state === undefined){
    return todoArr;
  }
  
  const newTodoArr = [...todoArr].filter(todo => todo.completed === state);
  return newTodoArr;
} 

export default filterTodoByCompleted;

