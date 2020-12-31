import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'first-aid',
    loadChildren: () => import('./first-aid/first-aid.module').then(m => m.FirstAidPageModule)
  },
  {
    path: 'fractures',
    loadChildren: () => import('./fractures/fractures.module').then(m => m.fracturesPageModule)
  },
  {
    path: 'unconscious',
    loadChildren: () => import('./unconscious/unconscious.module').then(m => m.UnconsciousPageModule)
  },
  {
    path: 'cardiac-arrest',
    loadChildren: () => import('./cardiac-arrest/cardiac-arrest.module').then(m => m.CardiacArrestPageModule)
  },
  {
    path: 'safe-position',
    loadChildren: () => import('./pages/safe-position/safe-position.module').then( m => m.SafePositionPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
