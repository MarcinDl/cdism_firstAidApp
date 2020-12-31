import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardiacArrestPage } from './cardiac-arrest.page';

const routes: Routes = [
  {
    path: '',
    component: CardiacArrestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardiacArrestPageRoutingModule {}
