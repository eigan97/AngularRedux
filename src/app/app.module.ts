import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ngrx
import  { StoreModule } from '@ngrx/store'
import  { StoreDevtoolsModule } from '@ngrx/store-devtools'
import  { reducers } from './app-reducer'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument() ],
  declarations: [ AppComponent, FooterComponent, TodoComponent, TodoListComponent, TodoItemComponent, TodoFooterComponent, TodoInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
