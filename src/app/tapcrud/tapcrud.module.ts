import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TapcrudPageRoutingModule } from './tapcrud-routing.module';

import { TapcrudPage } from './tapcrud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TapcrudPageRoutingModule
  ],
  declarations: [TapcrudPage]
})
export class TapcrudPageModule {}
