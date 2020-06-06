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
  title = 'Hello World'; 
  // movies = [];
  movies;

  constructor() {
    let movies = [];
    for (let i = 0; i < 10000; i++)
      // this.movies.push({ 
      movies.push({ 
        title: 'm ' + i, 
        prop1: 1,
        prop2: 1,
        prop3: 1,
        prop4: 1,
        prop5: 1,
        prop6: 1,
        prop7: 1,
        prop8: 1,
        prop9: 1,
        prop10: 1,
      });

      this.movies = List(movies);
  }

  changeTitle() { 
    this.title = 'UPDATED TITLE' ;
  }

  ngDoCheck() { 
    // console.log("AppComponent-DoCheck");
  }

  onClick() {
    let movie = this.movies[0];
    this.movies[0] = movie.set('title', 'UPDATED');
  }
}
