import { ContratosPage } from './../contratos/contratos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginServiceProvider } from "../../providers/login-service/login-service";
import { UtilitiesProvider } from "../../commons/utilities.provider";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userName: any;
  password: any;

  constructor(public utilities: UtilitiesProvider, public loginService: LoginServiceProvider, public parentCtrl: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    this.utilities.showLoader();
    const params = {
      userName: this.userName,
      userPass: this.password
    }
    this.loginService.postLogin(params)
      .subscribe((res) => { 
        console.log(res)
        if(res['status'] == true){
          this.parentCtrl.getRootNav().setRoot(ContratosPage, { 'loggedData': res['data']})
        } else {
          this.utilities.showToast(res['message'])
        }
      },
        (error) => {
          console.error(error);
        }
      )
  }

}
