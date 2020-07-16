import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiacArrestPageRoutingModule } from './cardiac-arrest-routing.module';

import { CardiacArrestPage } from './cardiac-arrest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiacArrestPageRoutingModule
  ],
  declarations: [CardiacArrestPage]
})
export class CardiacArrestPageModule {}
