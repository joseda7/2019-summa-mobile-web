import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { celsiaRouting } from "../../commons/constants/routing.constants";


@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  postLogin(params) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'
    });

    let options = {
      headers: httpHeaders
    };

    let body = "userName=" + params.userName + "&userPass=" + params.userPass;

    return this.http.post(celsiaRouting.loginServices.login, body, options);
  }

}
