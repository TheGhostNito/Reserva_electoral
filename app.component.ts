import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Configura el idioma por defecto
    this.translate.setDefaultLang('es'); // Establecer español como idioma por defecto
    this.translate.use('es'); // Usar español al iniciar
  }
}
