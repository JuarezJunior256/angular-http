import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../cursos.service';
import { log } from 'util';
import { Curso } from '../curso';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';

@Component({
  selector: 'app-cusos-lista',
  templateUrl: './cusos-lista.component.html',
  styles: []
})
export class CusosListaComponent implements OnInit {

  // cursos: Curso[];
  bsModalRef: BsModalRef;
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursosService,
    private alertService: AlertModalService) { }

  ngOnInit() {
   this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
          .pipe(
            catchError(error => {
                console.error(error);
                // this.error$.next(true);
                this.handleError();
                return empty();
            })
          );
  }


  handleError() { this.alertService.showAlertDager('Erro ao carregar cursos. Tente Novamente mais tarde.'); }

}
