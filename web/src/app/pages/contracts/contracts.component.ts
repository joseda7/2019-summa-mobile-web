import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  public selectedContract:any;

  public imagePath;
  public imgURL: any;
  public message: string;

  constructor() { }

  ngOnInit() {
    
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
      // console.log(this.imgURL); // Base 64
    }
  
  }


  handleOnChange() {
    console.log(this.selectedContract);
  }
}
