import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { upperFracturesPageRoutingModule } from './upperFractures-routing.module';

import { upperFracturesPage } from './upperFractures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    upperFracturesPageRoutingModule
  ],
  declarations: [upperFracturesPage]
})
export class upperFracturesPageModule { }
