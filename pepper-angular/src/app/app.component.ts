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
  exists;

  constructor(private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.cuisines = this.af.list('cuisines').snapshotChanges();
    this.restaurants = this.af.list('restaurants').valueChanges();
    
    this.exists = this.af.object('restaurants/1/features/1').valueChanges();

    this.exists.pipe(take(1)).subscribe(x => {
      if (x) console.log("EXISTS");if (x) console.log("EXISTS");
      else console.log("NOT EXISTS");
    })  
  }	  
  
}
