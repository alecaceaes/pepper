import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = ['Item1', 'Item2', 'Item3'];

  constructor(public router: Router) {}

  selectItem(item) {
    this.router.navigate(['/item-details'], { queryParams: { item: item } });
  }
 }
