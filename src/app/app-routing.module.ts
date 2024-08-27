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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
