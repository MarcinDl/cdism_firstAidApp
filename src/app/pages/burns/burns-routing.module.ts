import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurnsPage } from './burns.page';

const routes: Routes = [
  {
    path: '',
    component: BurnsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurnsPageRoutingModule {}
