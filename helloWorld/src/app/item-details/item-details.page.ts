import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  item;
  constructor(private modalCtrl: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.item = this.navParams.get('item');
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  done() {
    this.modalCtrl.dismiss();
  }
}
