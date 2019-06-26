import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { celsiaRouting } from "../../commons/constants/routing.constants";

@Injectable()
export class LoggedServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  postReport(params) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'
    });

    let options = {
      headers: httpHeaders
    };

    return this.http.post(celsiaRouting.loginServices.login, params, options);
  }

}
