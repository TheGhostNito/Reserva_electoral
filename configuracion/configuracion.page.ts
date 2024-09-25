import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {

  selectedLanguage: string;

  constructor(private translate: TranslateService) {
    // Recuperar el idioma guardado o establecer el idioma por defecto
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
    this.selectedLanguage = savedLanguage;
  }

  // Método para cambiar el idioma
  changeLanguage(event: any) {
    const lang = event.detail.value;
    this.translate.use(lang); // Cambia el idioma según la selección
    this.selectedLanguage = lang; // Actualizamos el idioma seleccionado
    localStorage.setItem('selectedLanguage', lang); // Guardar la selección en localStorage
  }
}
