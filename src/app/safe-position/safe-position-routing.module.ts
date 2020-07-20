import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafePositionPage } from './safe-position.page';

const routes: Routes = [
  {
    path: '',
    component: SafePositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafePositionPageRoutingModule {}
