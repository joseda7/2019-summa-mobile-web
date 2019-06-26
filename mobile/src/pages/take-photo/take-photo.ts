import { ConfirmPhotoPage } from './../confirm-photo/confirm-photo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-take-photo',
  templateUrl: 'take-photo.html',
})
export class TakePhotoPage {

  username;

  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
  }

  activateCamera(option) {
    let options: CameraOptions;
    if(option === 'camera') {
      options = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
    } else {
      options = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: this.camera.MediaType.PICTURE
      }
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.navCtrl.push(ConfirmPhotoPage, { 'base64': base64Image, 'username': this.username})
     console.log(base64Image);
    }, (err) => {
     // Handle error
    });
  }

  openCamera() {

  }

  openGallery() {
    
  }

}
