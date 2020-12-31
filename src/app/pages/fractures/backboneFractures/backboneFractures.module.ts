import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { backboneFracturesPageRoutingModule } from './backboneFractures-routing.module';

import { backboneFracturesPage } from './backboneFractures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    backboneFracturesPageRoutingModule
  ],
  declarations: [backboneFracturesPage]
})
export class backboneFracturesPageModule { }
