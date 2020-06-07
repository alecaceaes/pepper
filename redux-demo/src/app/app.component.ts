import { INCREMENT } from './actions';
import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  // counter = 0;
  @select('counter') count;
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s: IAppState) => s.messaging.newMessages) newMessageCount;

  constructor(private ngRedux: NgRedux<IAppState>) {
    // ngRedux.subscribe(() => {
    //   let store = ngRedux.getState();
    //   this.counter = store.counter;
    // });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
