import { UtilitiesProvider } from './../commons/utilities.provider';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceProvider } from './../providers/login-service/login-service';
import { ResultPageModule } from './../pages/result/result.module';
import { ConfirmPhotoPageModule } from './../pages/confirm-photo/confirm-photo.module';
import { TakePhotoPageModule } from './../pages/take-photo/take-photo.module';
import { ContratosPageModule } from './../pages/contratos/contratos.module';
import { LoginPageModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ContratosPageModule,
    TakePhotoPageModule,
    ConfirmPhotoPageModule,
    ResultPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    LoginServiceProvider,
    UtilitiesProvider
  ]
})
export class AppModule {}
