import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeizuresPageRoutingModule } from './seizures-routing.module';

import { SeizuresPage } from './seizures.page';
import { SharedModule } from '../../shared/shared.module'
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SeizuresPageRoutingModule,
    SharedModule
  ],
  declarations: [SeizuresPage]
})
export class SeizuresPageModule {}
