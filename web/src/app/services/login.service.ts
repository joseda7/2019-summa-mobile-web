import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoginService {

    public url:string;
    public headers:any;

    constructor( private http:HttpClient ) {
        this.url = "https://us-central1-summa-celsia.cloudfunctions.net/customLogin";
    }

    logUser(params) {

        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
            });
            
        let options = {
            headers: httpHeaders
        };

        let body = "userName=" + params.userName + "&userPass=" + params.userPass;
        console.log(body);
        return this.http.post(this.url, body, options);
    }

}