import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { backboneFracturesPageRoutingModule } from './backboneFractures-routing.module';

import { backboneFracturesPage } from './backboneFractures.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    backboneFracturesPageRoutingModule
  ],
  declarations: [backboneFracturesPage]
})
export class backboneFracturesPageModule { }
