import { ContratosPage } from './../contratos/contratos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginServiceProvider } from "../../providers/login-service/login-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName: any;
  password: any;

  constructor(public loginService: LoginServiceProvider, public parentCtrl: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    const params = {
      userName: this.userName,
      userPass: this.password
    }
    this.loginService.postLogin(params)
      .subscribe((res) => { 
        console.log()
      },
        (error) => {
          console.error(error);
        }
      )
    // this.parentCtrl.getRootNav().setRoot(ContratosPage);
  }

}
