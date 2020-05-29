import { ItemDetailsPage } from './../item-details/item-details.page';
import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [
    { description: 'Item1' },
    { description: 'Item2' },
    { description: 'Item3' }
  ];

  constructor(
    public router: Router,
    public modalCtrl: ModalController,
    public platform: Platform,
    public appVersion: AppVersion) {
      platform.ready().then(() => {
        appVersion.getVersionNumber().then(v => console.log('Version ', v));
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
