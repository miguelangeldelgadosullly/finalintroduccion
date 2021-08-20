import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashadminPageRoutingModule } from './dashadmin-routing.module';

import { DashadminPage } from './dashadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashadminPageRoutingModule
  ],
  declarations: [DashadminPage]
})
export class DashadminPageModule {}
