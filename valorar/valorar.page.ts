import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importa AlertController
import { TranslateService } from '@ngx-translate/core'; // Importa TranslateService

@Component({
  selector: 'app-valorar',
  templateUrl: './valorar.page.html',
  styleUrls: ['./valorar.page.scss'],
})
export class ValorarPage implements OnInit {
  rating = 0; // Calificación inicial
  starsArray = Array(5).fill(0); // Array de 5 estrellas

  constructor(
    private alertController: AlertController,
    private translate: TranslateService // Inyecta TranslateService
  ) { }

  ngOnInit() {
    // Puedes cargar la calificación inicial aquí si es necesario
  }

  // Método para actualizar la calificación
  rate(number: number) {
    this.rating = number; // Establecer la calificación seleccionada
  }

  // Método para mostrar una alerta
  async presentAlert(headerKey: string, messageKey: string, rating?: number) {
    const header = await this.translate.get(headerKey).toPromise();
    const message = await this.translate.get(messageKey, { rating }).toPromise();

    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [await this.translate.get('ACEPTAR').toPromise()] // Traducción del botón
    });

    await alert.present();
  }

  // Método para enviar la calificación
  async submitRating() {
    if (this.rating > 0) {
      console.log('Calificación enviada:', this.rating);
      // Aquí puedes añadir la lógica para enviar la calificación a un servidor
      // Por ejemplo, podrías llamar a un servicio para enviar la calificación.
      await this.presentAlert('VALORACION_EXITOSA', 'VALORACION_EXITO', this.rating);
    } else {
      await this.presentAlert('ATENCION', 'SELECCIONAR_CALIFICACION');
    }
  }
}
