import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { upperFracturesPage } from './upperFractures.page';

const routes: Routes = [
  {
    path: '',
    component: upperFracturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class upperFracturesPageRoutingModule { }
