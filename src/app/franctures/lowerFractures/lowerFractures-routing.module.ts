import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { lowerFracturesPage } from './lowerFractures.page';

const routes: Routes = [
  {
    path: '',
    component: lowerFracturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class lowerFracturesPageRoutingModule { }
