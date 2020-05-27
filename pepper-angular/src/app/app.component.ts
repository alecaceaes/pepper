import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pepper-angular';
  subscription: AngularFireList<any>; 
  cuisines: Observable<any[]>;
  restaurants: Observable<any[]>;

  constructor(private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.restaurants = this.af.list('restaurants', r => 
    r.orderByChild('rating')
      .equalTo(5)
      .limitToLast(50)).valueChanges();
  }	  
  
}
