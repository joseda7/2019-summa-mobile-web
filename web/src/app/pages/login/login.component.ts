import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  public infoUser:any;

  constructor(
    private _LoginService:LoginService,
  ) { }

  ngOnInit() {
    this._LoginService.logUser().subscribe(
      result => this.infoUser = result,
      error => console.log("An error has ocurred," + error )
    )

    console.log(this.infoUser);
  }

  // goToHome() {
  //   this._router.navigate(['/home']);
  // }

}
