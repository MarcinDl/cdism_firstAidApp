import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurnsPageRoutingModule } from './burns-routing.module';

import { BurnsPage } from './burns.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BurnsPageRoutingModule
  ],
  declarations: [BurnsPage]
})
export class BurnsPageModule {}
