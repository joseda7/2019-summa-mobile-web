import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map'; 


@Injectable()
export class ReportService {

    public url:string;
    public httpHeaders:any;

    constructor( private http:HttpClient ){
        this.url = "https://us-central1-summa-celsia.cloudfunctions.net/recordData";
    }

    sendReport(params) {
        let httpHeaders = new HttpHeaders({
            'Content-type': 'application/json',
            'Cache-Control': 'no-cache'
        })

        let options = {
            headers: httpHeaders
        }

        return this.http.post(this.url, params, options);
    }

}