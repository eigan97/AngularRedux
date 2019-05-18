import { Action } from '@ngrx/store';

export type filter_valido= 'todos' | 'completados' | 'pendientes' ;
export const SET_FILTER = '[Filter] Set';

export class SetFilterAction implements Action{
  readonly type = SET_FILTER;
  constructor(public filtro:filter_valido){
  }
}

export type Acciones = SetFilterAction;