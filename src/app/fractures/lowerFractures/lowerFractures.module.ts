import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { lowerFracturesPageRoutingModule } from './lowerFractures-routing.module';

import { lowerFracturesPage } from './lowerFractures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    lowerFracturesPageRoutingModule
  ],
  declarations: [lowerFracturesPage]
})
export class lowerFracturesPageModule { }
