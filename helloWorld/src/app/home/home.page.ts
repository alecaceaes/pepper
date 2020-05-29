import { ItemDetailsPage } from './../item-details/item-details.page';
import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';


const PHOTOLIBRARY = 0;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts;

  constructor(
    public router: Router,
    public modalCtrl: ModalController,
    public platform: Platform,
    public Geolocation: Geolocation
    ) {
      platform.ready().then(() => {
        Geolocation.getCurrentPosition({ 
          enableHighAccuracy: true,
          maximumAge: 3000,
          timeout: 5000 }).then(pos => {
            console.log('LONGITUDE', pos.coords.longitude)
            console.log('LATITUDE', pos.coords.latitude)
          });
      });
  }

  async selectItem(item) {
    const modal = await this.modalCtrl.create({
      component: ItemDetailsPage,
      componentProps: {
        item: item
      }
    })

    return modal.present();
  }
 }
