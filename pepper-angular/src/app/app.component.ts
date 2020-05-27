import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pepper-angular';
  subscription: AngularFireList<any>;
  restaurant;	  cuisines: Observable<any[]>;

  constructor(private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.subscription = this.af.list('cuisines');
    this.cuisines = this.subscription.snapshotChanges();
  }	  

  add() {
    this.subscription.push({
      name: 'Asian',
      details: {
        description : '...'
      }
    });
  }	  

  update() {
    // this.af.object('restaurant').update({
    // this.af.object('restaurant').set({
    //   name: 'New Name',
    //   rating: 5
    // })
    // this.af.object('favorites/1/10').set(true);
    this.af.object('favorites/1/10').set(null);
  }

  remove() {
    this.af.object('restaurant').remove()
      .then(x => console.log("SUCCESS"))
      .catch(error => console.log("ERROR", error));
  }
}
