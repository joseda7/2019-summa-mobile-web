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
    
    let params = { 
      userName: this.username, 
      userPass: this.userpwd 
    }
    
    this._LoginService.logUser(params).subscribe(
      result => {
        this.infoUser = result;
        console.log(this.infoUser);
        if(this.infoUser.status == true) {
          console.log(this.infoUser);
          localStorage.setItem("userKey", this.infoUser.data.fb.user.apiKey);
          localStorage.setItem("userNIC", this.infoUser.data.userFind.NIC[0]);
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
