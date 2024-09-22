import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubPageComponent } from './hub-page/hub-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hub',
    pathMatch: 'full',
  },
  {
    path: 'hub',
    component: HubPageComponent
  },
  {
    path: 'tic-tac-toe',
    loadChildren: () => import('./tic-tac-toe/tic-tac-toe.module').then(m => m.TicTacToeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
