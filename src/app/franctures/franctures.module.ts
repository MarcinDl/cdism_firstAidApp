import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrancturesPageRoutingModule } from './franctures-routing.module';

import { FrancturesPage } from './franctures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrancturesPageRoutingModule
  ],
  declarations: [FrancturesPage]
})
export class FrancturesPageModule {}
