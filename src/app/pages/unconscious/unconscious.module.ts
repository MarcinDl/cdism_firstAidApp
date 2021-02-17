import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnconsciousPageRoutingModule } from './unconscious-routing.module';

import { UnconsciousPage } from './unconscious.page';
import { SharedModule } from './../../shared/shared.module'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnconsciousPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [UnconsciousPage]
})
export class UnconsciousPageModule {}
