import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { fracturesPageRoutingModule } from './fractures-routing.module';

import { fracturesPage } from './fractures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    fracturesPageRoutingModule
  ],
  declarations: [fracturesPage]
})
export class fracturesPageModule { }
