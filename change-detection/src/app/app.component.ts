import { Component, DoCheck } from '@angular/core';

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
    setTimeout(() => {}, 3000);
  }

  ngDoCheck() {
    console.log('AppComponent-DoCheck');
  }

  onClick() {

  }
}
