import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { generalFracturesPageRoutingModule } from './generalFractures-routing.module';

import { generalFracturesPage } from './generalFractures.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    generalFracturesPageRoutingModule
  ],
  declarations: [generalFracturesPage]
})
export class generalFracturesPageModule { }
