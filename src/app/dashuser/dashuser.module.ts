import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashuserPageRoutingModule } from './dashuser-routing.module';

import { DashuserPage } from './dashuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashuserPageRoutingModule
  ],
  declarations: [DashuserPage]
})
export class DashuserPageModule {}
