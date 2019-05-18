import { Action } from '@ngrx/store'

export const AGREGAR_TAREA = '[TODO] Agregar';
export const TOGGLE_TAREA = '[TODO] Toggle';
export const DELETE_TAREA = '[TODO] Delete';

export class AgregarTodo implements Action{
  readonly type = AGREGAR_TAREA;
  constructor(public texto:string){

  }
}
export class ToggleTodo implements Action{
  readonly type = TOGGLE_TAREA;
  constructor(public id:number){

  }
}
export class DeleteTodo implements Action{
  readonly type = DELETE_TAREA;
  constructor(public id:number){
    
  }
}
export type Acciones = AgregarTodo|
                        ToggleTodo|
                        DeleteTodo;