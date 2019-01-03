import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CusosListaComponent } from './cusos-lista/cusos-lista.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [CusosListaComponent]
})
export class CursosModule { }
