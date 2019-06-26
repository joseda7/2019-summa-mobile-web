import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  public infoUser:any;
  public username:string;
  public userpwd:string;

  constructor(
    private _LoginService:LoginService,
    private _router:Router
  ) { }

  ngOnInit() {
    
  }

  signIn() {
    console.log("name: "+ this.username);
    console.log("pwd: "+ this.userpwd);
    
    this._LoginService.logUser({ userName:this.username, userPass:this.userpwd }).subscribe(
      result => {
        this.infoUser = result;
        console.log(this.infoUser);
        if(this.infoUser.status == true) {

          localStorage.setItem("user", this.infoUser.data);
          console.log(this.infoUser);
          this.goNextPage();
        }
      },
      error => console.log("An error has ocurred," + error )
    )    
  }

  goNextPage() {
    this._router.navigate(['/contracts']);
  }

}
