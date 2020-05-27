import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pepper-angular';
  cuisines;

  constructor(private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.cuisines = this.af.list('cuisines').snapshotChanges();
  }	  
}
