import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TapcrudPage } from './tapcrud.page';

const routes: Routes = [
  {
    path: '',
    component: TapcrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TapcrudPageRoutingModule {}
