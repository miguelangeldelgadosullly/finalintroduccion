import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashadminPage } from './dashadmin.page';

const routes: Routes = [
  {
    path: '',
    component: DashadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashadminPageRoutingModule {}
