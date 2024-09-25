import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importar Router
import { TranslateService } from '@ngx-translate/core'; // Importar TranslateService

@Component({
  selector: 'app-beta',
  templateUrl: './beta.page.html',
  styleUrls: ['./beta.page.scss'],
})
export class BetaPage implements OnInit {

  formData = {
    firstName: '',
    lastName: '',
    rut: '',
    documentNumber: '',
    time: ''
  };

  timeOptions: string[] = []; // Array para las opciones de hora

  constructor(
    private alertController: AlertController,
    private router: Router,
    private translate: TranslateService // Inyectar TranslateService
  ) { }

  ngOnInit() {
    this.generateTimeOptions();
  }

  async generateQRCode() {
    const header = await this.translate.get('RESERVA_CONFIRMADA').toPromise();
    const message = await this.translate.get('RESERVA_EXITO').toPromise();
    const buttonText = await this.translate.get('OK').toPromise();

    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: buttonText,
          handler: () => {
            // Limpiar los datos del formulario
            this.formData = {
              firstName: '',
              lastName: '',
              rut: '',
              documentNumber: '',
              time: ''
            };

            // Redirigir a la página de inicio
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

  generateTimeOptions() {
    const startHour = 9; // Hora inicial
    const endHour = 18; // Hora final (18:00)
    const interval = 30; // Intervalo en minutos

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let min = 0; min < 60; min += interval) {
        const time = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
        this.timeOptions.push(time);
      }
    }
  }
}