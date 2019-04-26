import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from '../../cursos.service';
import { log } from 'util';
import { Curso } from '../curso';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosService2 } from '../../cursos.service2';

@Component({
  selector: 'app-cusos-lista',
  templateUrl: './cusos-lista.component.html',
  styles: []
})
export class CusosListaComponent implements OnInit {

  // cursos: Curso[];
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  cursoSelecionado: Curso;

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService2,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

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


  handleError() {
    this.alertService.showAlertDager('Erro ao carregar cursos. Tente Novamente mais tarde.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmeDelete() {
    this.service.remove(this.cursoSelecionado.id).subscribe(
     success => {this.onRefresh();
      this.deleteModalRef.hide();
     });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
