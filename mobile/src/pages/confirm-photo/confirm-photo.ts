import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoggedServiceProvider } from "../../providers/logged-service/logged-service";

@IonicPage()
@Component({
  selector: 'page-confirm-photo',
  templateUrl: 'confirm-photo.html',
})
export class ConfirmPhotoPage {

  base64;

  constructor(public loggedServices: LoggedServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.base64 = this.navParams.get('base64');
  }

  confirmPhoto() {

  }

  goBack() {
		this.navCtrl.pop();
	}
}
