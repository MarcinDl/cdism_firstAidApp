import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstAidPageRoutingModule } from './first-aid-routing.module';

import { FirstAidPage } from './first-aid.page';
import { SharedModule } from './../../shared/shared.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstAidPageRoutingModule,
    SharedModule
  ],
  declarations: [FirstAidPage]
})
export class FirstAidPageModule {}
