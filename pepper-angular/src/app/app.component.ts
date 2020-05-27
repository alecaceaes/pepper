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
}
