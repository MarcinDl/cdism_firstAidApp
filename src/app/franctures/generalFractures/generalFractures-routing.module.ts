import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { generalFracturesPage } from './generalFractures.page';

const routes: Routes = [
  {
    path: '',
    component: generalFracturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class generalFracturesPageRoutingModule { }
