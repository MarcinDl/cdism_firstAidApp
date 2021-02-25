import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiacArrestPageRoutingModule } from './cardiac-arrest-routing.module';

import { CardiacArrestPage } from './cardiac-arrest.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiacArrestPageRoutingModule,
    TranslateModule,
    SharedModule,
  ],
  declarations: [CardiacArrestPage],
})
export class CardiacArrestPageModule {}
