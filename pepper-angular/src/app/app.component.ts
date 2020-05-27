import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pepper-angular';
  cuisines;

  constructor(af: AngularFireDatabase) {
    af.list('cuisines').snapshotChanges().subscribe(x => {
      this.cuisines = x;
      console.log(this.cuisines)
    })
  }
}
