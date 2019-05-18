import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/todo.model/todo'
import  * as fromTodo from './todo/reducer/todo-reduce';
import * as fromFilter from './filter/todo-filter-reducer';

export interface AppState{
  todos:Todo[],
  filtro:string
}

export const reducers:ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFilter.reduxFilter
}