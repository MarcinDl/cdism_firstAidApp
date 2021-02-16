import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { fracturesPageRoutingModule } from './fractures-routing.module';

import { fracturesPage } from './fractures.page';
import { SharedModule } from './../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    fracturesPageRoutingModule,
    SharedModule
  ],
  declarations: [fracturesPage]
})
export class fracturesPageModule { }
