import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos-routing.module';
import { CusosListaComponent } from './cusos-lista/cusos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CusosListaComponent,
    CursosFormComponent
  ]
})
export class CursosModule { }
