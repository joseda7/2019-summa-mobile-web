import { Component, OnInit, ɵConsole } from '@angular/core';
import { ReportService } from './../../services/report.service'

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  providers: [ ReportService ]
})
export class ContractsComponent implements OnInit {

  public selectedContract:any;
  public page:any;

  public imagePath;
  public imgURL: any;
  public message: string;

  public userOrterObj:any;

  constructor(
    private _ReportService: ReportService
  ) { 
    this.userOrterObj = {
      nic:"",
      accessToken:"",
      imageBase64: ""
    }
    this.page = {
      showCheckout: false,
      showPicture: false,
      showContract: true
    }
  }

  ngOnInit() {
    this.userOrterObj.nic = localStorage.getItem("userNIC");
    this.userOrterObj.accessToken = localStorage.getItem("userKey");
  }

  preview(files) {

    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 

    reader.onload = _event => {
      this.imgURL = reader.result; 
      this.userOrterObj.imageBase64 = this.imgURL.split(",")[1];
      console.log(this.imgURL); // Base 64
    }
  
  }


  handleOnChange() {
    console.log(this.selectedContract);
  }

  makeOrder() {
    
    console.log("Final request object: ");
    console.dir(this.userOrterObj);

    this._ReportService.sendReport(this.userOrterObj).subscribe(
      result => {
        // this.infoUser = result;
        // console.log(this.infoUser);
        // if(this.infoUser.status == true) {
        console.log(result);

        this.page = {
          showCheckout: true,
          showPicture: false,
          showContract: false
        }

      },
      error => console.log("An error has ocurred," + error )
    )


  }

  showNextPage(){
    this.page = {
      showCheckout: false,
      showPicture: true,
      showContract: false
    }
  }
}
