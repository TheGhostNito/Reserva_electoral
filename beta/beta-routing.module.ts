import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetaPage } from './beta.page';

const routes: Routes = [
  {
    path: '',
    component: BetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetaPageRoutingModule {}
