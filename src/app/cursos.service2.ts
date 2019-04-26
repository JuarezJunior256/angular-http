import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

import { Curso } from './cursos/curso';
import { environment } from '../environments/environment';
import { CrudService } from './shared/crud-service';



@Injectable({
  providedIn: 'root'
})
export class CursosService2 extends CrudService<Curso> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }

}
