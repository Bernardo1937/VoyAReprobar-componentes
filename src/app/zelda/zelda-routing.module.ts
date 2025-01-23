import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZeldaPage } from './zelda.page';

const routes: Routes = [
  {
    path: '',
    component: ZeldaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZeldaPageRoutingModule {}
