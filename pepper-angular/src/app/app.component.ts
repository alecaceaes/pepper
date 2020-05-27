import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

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
    this.cuisines = this.af.list('cuisines').snapshotChanges();
    this.restaurants = this.af.list('restaurants').valueChanges().pipe(
      map(restaurants => {
        console.log("BEFORE MAP", restaurants);
        restaurants.map(restaurant => {
          restaurant['cuisineType'] = this.af.object('cuisines/' + restaurant['cuisine']).valueChanges();
        })
        console.log("AFTER MAP", restaurants);
        return restaurants;
      })
    );
  }	  
  
}
