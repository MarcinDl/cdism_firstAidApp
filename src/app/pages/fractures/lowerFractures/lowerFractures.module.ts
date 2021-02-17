import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { lowerFracturesPageRoutingModule } from './lowerFractures-routing.module';

import { lowerFracturesPage } from './lowerFractures.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    lowerFracturesPageRoutingModule
  ],
  declarations: [lowerFracturesPage]
})
export class lowerFracturesPageModule { }
