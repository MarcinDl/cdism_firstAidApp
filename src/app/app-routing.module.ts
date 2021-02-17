import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'seizures',
    loadChildren: () => import('./pages/seizures/seizures.module').then(m => m.SeizuresPageModule)
  },
  {
    path: 'fractures',
    loadChildren: () => import('./pages/fractures/fractures.module').then(m => m.fracturesPageModule)
  },
  {
    path: 'unconscious',
    loadChildren: () => import('./pages/unconscious/unconscious.module').then(m => m.UnconsciousPageModule)
  },
  {
    path: 'cardiac-arrest',
    loadChildren: () => import('./pages/cardiac-arrest/cardiac-arrest.module').then(m => m.CardiacArrestPageModule)
  },
  {
    path: 'safe-position',
    loadChildren: () => import('./pages/safe-position/safe-position.module').then( m => m.SafePositionPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'burns',
    loadChildren: () => import('./pages/burns/burns.module').then( m => m.BurnsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
