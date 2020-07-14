import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { backboneFracturesPage } from './backboneFractures.page';

const routes: Routes = [
  {
    path: '',
    component: backboneFracturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class backboneFracturesPageRoutingModule { }
