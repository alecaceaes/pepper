import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { IAppState } from '../store'; 
import { CLEAR_TODOS } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select() todos: Promise<any[]>; 
  @select() lastUpdate; 
  
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
