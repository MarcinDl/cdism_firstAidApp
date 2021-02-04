import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnconsciousPageRoutingModule } from './unconscious-routing.module';

import { UnconsciousPage } from './unconscious.page';
import { SharedModule } from './../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnconsciousPageRoutingModule,
    SharedModule
  ],
  declarations: [UnconsciousPage]
})
export class UnconsciousPageModule {}
