import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashuserPage } from './dashuser.page';

const routes: Routes = [
  {
    path: '',
    component: DashuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashuserPageRoutingModule {}
