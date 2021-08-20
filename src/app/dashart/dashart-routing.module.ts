import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashartPage } from './dashart.page';

const routes: Routes = [
  {
    path: '',
    component: DashartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashartPageRoutingModule {}
