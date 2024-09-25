import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BetaPage } from './beta.page';
import { BetaPageRoutingModule } from './beta-routing.module';
import { TranslateModule } from '@ngx-translate/core'; // Asegúrate de importar esto

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetaPageRoutingModule,
    TranslateModule // Asegúrate de incluir esto
  ],
  declarations: [BetaPage]
})
export class BetaPageModule {}



