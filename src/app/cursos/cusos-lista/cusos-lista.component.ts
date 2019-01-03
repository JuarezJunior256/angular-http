import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../cursos.service';
import { log } from 'util';
import { Curso } from '../curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cusos-lista',
  templateUrl: './cusos-lista.component.html',
  styles: []
})
export class CusosListaComponent implements OnInit {

  // cursos: Curso[];

  cursos$: Observable<Curso[]>;

  constructor(private service: CursosService) { }

  ngOnInit() {
    // this.service.list().subscribe(dados => this.cursos = dados);

    this.cursos$ = this.service.list();
  }

}
