import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashartPageRoutingModule } from './dashart-routing.module';

import { DashartPage } from './dashart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashartPageRoutingModule
  ],
  declarations: [DashartPage]
})
export class DashartPageModule {}

