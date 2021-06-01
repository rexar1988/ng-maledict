import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loaders',
    loadChildren: () =>import('./views/loaders/loaders.module').then(m => m.LoadersModule),
  },
  {
    path: 'dialog',
    loadChildren: () =>import('./views/dialog/dialog.module').then(m => m.DialogModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
