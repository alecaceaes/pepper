import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions'; 
import { IAppState } from '../store'; 
import { TodoService } from '../todo-dashboard/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  constructor(private service: TodoService,
    private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    // this.ngRedux.dispatch({ type: 'FETCH_TODOS_REQUEST' });
    // // store.isFetching = true

    // this.service.getTodos().subscribe(todos => {
    //   this.ngRedux.dispatch({ type: 'FETCH_TODOS_SUCCESS', todos: todos });
    // }, err => {
    //   this.ngRedux.dispatch({ type: 'FETCH_TODOS_ERROR' });
    // });
    this.service.loadTodos();
  }

  addTodo(input) {
    if (!input.value) return; 

    // this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });
    let todo = { title: input.value }
    // this.todos.push(todo).subscribe(t => {
    //   this.ngRedux.dispatch({ type: ADD_TODO, todo: todo });
    // });

    this.ngRedux.dispatch({ type: ADD_TODO, todo: todo });
    this.todos.push(todo).subscribe(t => {
      this.ngRedux.dispatch({ type:'ADD_TODO_CORELLATE', todo: todo });
    });

    this.service.addTodo(todo);

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
