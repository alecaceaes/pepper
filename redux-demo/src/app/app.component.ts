import { INCREMENT } from './actions';
import { NgRedux } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
