import { ItemDetailsPage } from './../item-details/item-details.page';
import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';


const PHOTOLIBRARY = 0;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router: Router,
    public modalCtrl: ModalController,
    public platform: Platform
    ) {
      platform.ready().then(() => {
        let map = GoogleMaps.create('map_canvas');
      });
  }

 }
