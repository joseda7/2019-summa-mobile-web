import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-confirm-photo',
  templateUrl: 'confirm-photo.html',
})
export class ConfirmPhotoPage {

  base64;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.base64 = this.navParams.get('base64');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPhotoPage');
  }

}
