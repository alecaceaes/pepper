import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppState } from '../store';

@Injectable()
export class TodoService {
    private readonly url = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: HttpClient, private ngRedux: NgRedux<IAppState>) {

    }

    // getTodos() {
    loadTodos() {
        // return this.http.get(this.url);
        this.ngRedux.dispatch({ type: 'FETCH_TODOS_REQUEST' });
        // store.isFetching = true

        this.http.get(this.url).subscribe(todos => {
            this.ngRedux.dispatch({ type: 'FETCH_TODOS_SUCCESS', todos: todos });
        }, err => {
            this.ngRedux.dispatch({ type: 'FETCH_TODOS_ERROR' });
        });
    }

    addTodo(todo) {
        return this.http.post(this.url, todo);
    }
}