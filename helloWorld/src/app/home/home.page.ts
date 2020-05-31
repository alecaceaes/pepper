import { ItemDetailsPage } from './../item-details/item-details.page';
import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router: Router,
    public platform: Platform
    ) {
      platform.ready().then(() => {

      });
  }

 }
