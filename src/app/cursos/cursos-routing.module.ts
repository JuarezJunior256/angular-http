import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CusosListaComponent } from './cusos-lista/cusos-lista.component';

const routes: Routes = [
  {path: '', component: CusosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
