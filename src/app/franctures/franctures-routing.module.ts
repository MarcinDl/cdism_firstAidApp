import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrancturesPage } from './franctures.page';

const routes: Routes = [
  {
    path: '',
    component: FrancturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrancturesPageRoutingModule {}
