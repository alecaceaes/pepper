import { Component, DoCheck } from '@angular/core';

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
    { title: 'm1' },
    { title: 'm2' },
    { title: 'm3' }
  ];

  constructor() {
    let input = 'apple';
    let cd = new ChangeDetector(input);

    input = input.toLocaleUpperCase();

    console.log(cd.isStateChange(input));
  }

  ngDoCheck() {
    console.log('AppComponent-DoCheck');
  }

  onClick() {
    this.movies[0].title = 'UPDATE';
  }
}
