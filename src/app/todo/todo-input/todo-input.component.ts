import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {AppState} from '../../app-reducer';
import * as fromTodo from '../actions/todo-actions'
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('',Validators.required)
  } 
  agregarTodo(){
    if(this.txtInput.invalid){
      return;
    }
    
    const accion = new fromTodo.AgregarTodo(this.txtInput.value);
    this.store.dispatch(accion);

  }

}