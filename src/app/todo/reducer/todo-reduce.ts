import * as fromActions from '../actions/todo-actions'
import { Todo } from '../todo.model/todo'

const todo1 = new Todo("saludar 1")
const todo2 = new Todo("saludar 2")
todo2.completado=true;
const estadoInicial: Todo[] =[todo1,todo2];

export function todoReducer(state = estadoInicial,action:fromActions.Acciones):Todo[]{
  switch(action.type){
    case fromActions.AGREGAR_TAREA:
      const todo = new Todo(action.texto);
      return [ ...state,todo ]
    case fromActions.TOGGLE_TAREA:
      return state.map(edit=>{
        if(edit.id===action.id){
          return {
            ...edit,
            completado: !edit.completado
          }
        }else{
          return edit;
        }
      });
    case fromActions.DELETE_TAREA:
      return state.filter(todoEdit => todoEdit.id!== action.id);
    default:
      return state
  }
}