import { Component, OnInit, Input, ViewChild, ElementRef  } from '@angular/core';
import { Todo } from '../todo.model/todo';
import {FormControl, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import {AppState} from '../../app-reducer';
import { ToggleTodo, DeleteTodo }from '../actions/todo-actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @ViewChild('inputFisico') inputFisico: ElementRef;

  checkField:FormControl;  
  txtInput:FormControl;

  editando:boolean;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto,Validators.required)
    this.checkField.valueChanges.subscribe(()=>{
      const accion = new ToggleTodo(this.todo.id);
      this.store.dispatch(accion);
    });
  }
  editar(){
    this.editando=true
    setTimeout(()=>{
      this.inputFisico.nativeElement.select();
    },1)
    
  }
  finEdicion(){
    this.editando=false;
  }
  deleteTodo(){
    const accion = new DeleteTodo(this.todo.id);
    this.store.dispatch(accion);
  }

}