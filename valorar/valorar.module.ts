import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorarPageRoutingModule } from './valorar-routing.module';
import { ValorarPage } from './valorar.page';
import { TranslateModule } from '@ngx-translate/core'; // Importar el módulo de traducción

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorarPageRoutingModule,
    TranslateModule // Agregar este módulo
  ],
  declarations: [ValorarPage]
})
export class ValorarPageModule {}
