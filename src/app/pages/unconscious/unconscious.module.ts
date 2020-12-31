import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnconsciousPageRoutingModule } from './unconscious-routing.module';

import { UnconsciousPage } from './unconscious.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnconsciousPageRoutingModule
  ],
  declarations: [UnconsciousPage]
})
export class UnconsciousPageModule {}
