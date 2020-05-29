import { ItemDetailsPage } from './../item-details/item-details.page';
import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
    public appVersion: AppVersion,
    private Contacts: Contacts,
    private Camera: Camera) {
      platform.ready().then(() => {
        appVersion.getVersionNumber().then(v => console.log('Version ', v));
        Contacts.find(['displayName']).then(c => this.contacts = c);
        Camera.getPicture({
          sourceType: PHOTOLIBRARY
        }).then(imgData => console.log("IMAGE", imgData));

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
