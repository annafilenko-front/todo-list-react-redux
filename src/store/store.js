import { combineReducers, createStore } from 'redux';
import { todoReducer } from './reducers/todoReduser';
import { filterReducer } from './reducers/filterReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
})
export const store = createStore(rootReducer)