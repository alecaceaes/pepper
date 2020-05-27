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
    this.af.list('restaurants').push({ name: '' })
      .then(x => {
        console.log(x.key)
        let restaurant = { name: "My Restaurant" };

        let update = {};
        // update['restaurants/' + x.key] = restaurant;
        update['restaurants/' + x.key] = null;
        // update['restaurants-by-city/camberwell/' + x.key] = true;
        // update['restaurants-by-city/camberwell/' + x.key] = restaurant;
        update['restaurants-by-city/camberwell/' + x.key] = null;
        this.af.object('/').update(update);
      })
  }  
}
