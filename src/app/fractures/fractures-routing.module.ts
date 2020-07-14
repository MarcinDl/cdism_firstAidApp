import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fracturesPage } from './fractures.page';

const routes: Routes = [
  {
    path: '',
    component: fracturesPage,
    children: [
      {
        path: 'generalFractures',
        loadChildren: () => import('./generalFractures/generalFractures.module').then(m => m.generalFracturesPageModule)
      },
      {
        path: 'upperFractures',
        loadChildren: () => import('./upperFractures/upperFractures.module').then(m => m.upperFracturesPageModule)
      },
      {
        path: 'lowerFractures',
        loadChildren: () => import('./lowerFractures/lowerFractures.module').then(m => m.lowerFracturesPageModule)
      },
      {
        path: 'backboneFractures',
        loadChildren: () => import('./backboneFractures/backboneFractures.module').then(m => m.backboneFracturesPageModule)
      },
      {
        path: '',
        redirectTo: './generalFractures',
        pathMatch: "full"
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class fracturesPageRoutingModule { }
