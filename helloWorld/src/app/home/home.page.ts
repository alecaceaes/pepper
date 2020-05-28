import { ItemDetailsPage } from './../item-details/item-details.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = ['Item1', 'Item2', 'Item3'];

  constructor(public router: Router, public modalCtrl: ModalController) {}

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
