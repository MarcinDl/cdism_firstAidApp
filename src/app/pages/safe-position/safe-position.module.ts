import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafePositionPageRoutingModule } from './safe-position-routing.module';

import { SafePositionPage } from './safe-position.page';
import { SharedModule } from './../../shared/shared.module'
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    SafePositionPageRoutingModule
  ],
  declarations: [SafePositionPage]
})
export class SafePositionPageModule {}
