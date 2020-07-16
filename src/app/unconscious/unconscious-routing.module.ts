import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnconsciousPage } from './unconscious.page';

const routes: Routes = [
  {
    path: '',
    component: UnconsciousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnconsciousPageRoutingModule {}
