import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtDetailsPage } from './art-details.page';

const routes: Routes = [
  {
    path: '',
    component: ArtDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtDetailsPageRoutingModule {}
