import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtDetailsPageRoutingModule } from './art-details-routing.module';

import { ArtDetailsPage } from './art-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtDetailsPageRoutingModule
  ],
  declarations: [ArtDetailsPage]
})
export class ArtDetailsPageModule {}
