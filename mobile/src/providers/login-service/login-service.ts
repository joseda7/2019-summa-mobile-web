import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http'


@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

}
