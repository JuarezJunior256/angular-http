import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})

export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(msg: string, type: string) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = 'danger';
    bsModalRef.content.msg = msg;
  }

  showAlertDager (msg: string) {
    this.showAlert(msg, 'danger');
  }

  showAlertSuccess (msg: string) {
    this.showAlert(msg, 'success');
  }
}
