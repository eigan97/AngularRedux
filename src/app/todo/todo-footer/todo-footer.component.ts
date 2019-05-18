import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../../app-reducer';
import * as fromFilter from '../../filter/todo-filter-action'
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos:fromFilter.filter_valido[] = ["todos","pendienes","completados"]
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }
  filterAll(){
    const accion = new fromFilter.SetFilterAction('todos');
    this.store.dispatch(accion);
  }
  filterPendientes(){

  }
  filterComplete(){

  }

}