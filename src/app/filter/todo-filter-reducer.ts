import * as fromFilter from './todo-filter-action'

const estadoInicial: fromFilter.filter_valido = 'pendientes'

export function reduxFilter(state=estadoInicial, action:fromFilter.Acciones):fromFilter.filter_valido{
  switch(action.type){
    case fromFilter.SET_FILTER:
      return action.filtro;
    default:
      return state;
  }
}