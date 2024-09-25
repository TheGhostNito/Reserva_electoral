import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core'; // Importar TranslateModule

import { ConfiguracionPageRoutingModule } from './configuracion-routing.module';
import { ConfiguracionPage } from './configuracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de que esté FormsModule
    IonicModule,
    TranslateModule, // Asegúrate de importar TranslateModule
    ConfiguracionPageRoutingModule
  ],
  declarations: [ConfiguracionPage]
})
export class ConfiguracionPageModule {}

