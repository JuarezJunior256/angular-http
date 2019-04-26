import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../../cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styles: []
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {

   /*this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.loadById(id) )
    )
    .subscribe((curso) => this.updateForm(curso) );*/

    const curso = this.route.snapshot.data['curso'];

   this.form = this.fb.group({
     id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  /*updateForm(curso) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    });*/


  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');

      if (this.form.value.id) {
        this.service.update(this.form.value).subscribe(
          success => {
            this.modal.showAlertSuccess('Curso atualizado com sucesso.');
           this.location.back();
         },
         error => this.modal.showAlertDager('Erro ao atualizar curso.'),
         () => console.log('request completo')
        );
      } else {
        this.service.create(this.form.value).subscribe(
          success => {
              this.modal.showAlertSuccess('Curso criado com sucesso.');
             this.location.back();
           },
           error => this.modal.showAlertDager('Erro ao criar curso.'),
           () => console.log('request completo')
         );
      }
    }
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
