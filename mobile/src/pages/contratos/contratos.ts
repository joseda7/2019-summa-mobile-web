import { TakePhotoPage } from './../take-photo/take-photo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from "../../commons/session.provider";


@IonicPage()
@Component({
  selector: 'page-contratos',
  templateUrl: 'contratos.html',
})
export class ContratosPage {

  loggedData;

  contractSelected;

  constructor(public sessionProvider: SessionProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.loggedData = this.navParams.get('loggedData');
  }

  goTakePhoto() {
    this.sessionProvider.data['nicSelected'] = this.contractSelected;
    this.navCtrl.push(TakePhotoPage, { 'username': this.loggedData.userFind.userName});
  }

  goBack() {
    this.navCtrl.pop();
  }

}
