import { Component, DoCheck } from '@angular/core';
import { Map, List } from 'immutable';

class ChangeDetector {
  private _oldState;

  constructor(input) {
    this._oldState = input;
  }

  isStateChange(input) {
    return (this._oldState != input);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'change-detection';
  movies = [
    Map({ title: 'm1', genre: 1 }),
    Map({ title: 'm2' }),
    Map({ title: 'm3' })
  ];

  constructor() {
    // let movie = Map({ title: 'm1', genre: 1});
    // movie.get('title');
    // movie = movie.set('title', 'NEW TITLE');

    // let list = List([1, 2, 3]);
    // list = list.push(4);
    
  }

  ngDoCheck() {
    console.log('AppComponent-DoCheck');
  }

  onClick() {
    var movie = this.movies[0];
    this.movies[0] = movie.set('title', 'UPDATED');
  }
}
