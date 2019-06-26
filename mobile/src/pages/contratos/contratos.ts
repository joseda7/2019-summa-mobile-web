import { TakePhotoPageModule } from './../take-photo/take-photo.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-contratos',
  templateUrl: 'contratos.html',
})
export class ContratosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTakePhoto() {
    this.navCtrl.push(TakePhotoPageModule);
  }

}
