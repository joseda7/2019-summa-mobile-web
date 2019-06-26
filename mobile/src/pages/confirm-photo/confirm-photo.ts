import { SessionProvider } from './../../commons/session.provider';
import { ResultPage } from './../result/result';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoggedServiceProvider } from "../../providers/logged-service/logged-service";
import { UtilitiesProvider } from "../../commons/utilities.provider";

@IonicPage()
@Component({
  selector: 'page-confirm-photo',
  templateUrl: 'confirm-photo.html',
})
export class ConfirmPhotoPage {

  base64;

  username;

  constructor(public sessionProvider: SessionProvider, public parentCtrl: App, public utilities: UtilitiesProvider, public loggedServices: LoggedServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.base64 = this.navParams.get('base64');
    this.username = this.navParams.get('username');
  }

  confirmPhoto() {
    this.utilities.showLoader();
    const params = {
      accessToken : this.sessionProvider.data['accessToken'],
      nic : this.sessionProvider.data['nicSelected'],
      imageBase64 : this.base64
    }
    this.loggedServices.postReport(params)
      .subscribe((res) => { 
        this.utilities.closeLoader();
        console.log(res)
        if(res['status'] == true){
          this.navCtrl.push(ResultPage);
        } else {
          this.utilities.showToast(res['message'])
        }
      },
        (error) => {
          this.utilities.closeLoader();
          console.error(error);
        }
      )
  }

  goBack() {
		this.navCtrl.pop();
	}
}
