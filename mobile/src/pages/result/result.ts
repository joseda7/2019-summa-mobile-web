import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  username: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
