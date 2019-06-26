import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class UtilitiesProvider {


	constructor(public toastCtrl: ToastController,
        public loadingCtrl: LoadingController) {

	}

	/**
	 * @description Método para ocultar el loading
	 * @method dismissModal
	 */
	public showToast(message) {
		const toast = this.toastCtrl.create({
            message: message,
            duration: 3000
          });
          toast.present();
    }
    
    /**
	 * @description Método para ocultar el loading
	 * @method dismissModal
	 */
	public showLoader() {
		const loader = this.loadingCtrl.create({
            content: "Por favor espera...",
            duration: 3000
          });
          loader.present();
    }
    
    /**
	 * @description Método para ocultar el loading
	 * @method closeLoader 
	 */
	public closeLoader() {
		
	}
}