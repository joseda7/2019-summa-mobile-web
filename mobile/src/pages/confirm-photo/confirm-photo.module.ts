import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPhotoPage } from './confirm-photo';

@NgModule({
  declarations: [
    ConfirmPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPhotoPage),
  ],
})
export class ConfirmPhotoPageModule {}
