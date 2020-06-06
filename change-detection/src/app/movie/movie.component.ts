import { Component, OnInit, Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements DoCheck {
  @Input() movie;

  constructor() { }

  ngDoCheck() {
    console.log('MovieComponent-DoCheck');
  }

}
