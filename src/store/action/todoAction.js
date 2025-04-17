import { 
  CREATE_TODO, 
  REMOVE_TODO, 
  UPDATE_TODO, 
  TOGGLE_TODO, 
  REMOVE_COMPLETED_TODO, 
  COMPLETE_ALL } from "../const/todoActionConst"

export const createTodoAction = (newTodoTitle) => {
  return {type: CREATE_TODO, newTodoTitle}
}

export const removeTodoAction = (todoId) => {
  return {type: REMOVE_TODO, todoId}
}

export const updateTodoAction = (newValue,todoId) =>{
  return {type: UPDATE_TODO, newValue, todoId}
}

export const toggleTodoAction = (todoId) => {
  return {type: TOGGLE_TODO, todoId}
}

export const removeCompletedTodoAction = () => {
  return {type: REMOVE_COMPLETED_TODO}
}

export const completeAllAction = () => {
  return {type: COMPLETE_ALL}
}