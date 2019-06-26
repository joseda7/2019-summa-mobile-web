import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map'; 


@Injectable()
export class ReportService {

    public url:string;
    public headers:any;

    constructor( private http:HttpClient ){
        this.headers = new HttpHeaders().set("Content-type", "application/x-www-form-urlencoded");
        this.url = "https://us-central1-summa-celsia.cloudfunctions.net/recordData";
    }

    sendReport(params) {
        let body = "userName=" + params.userName + "&userPass=" + params.userPass
        return this.http.post(this.url, body, this.headers);
    }

}