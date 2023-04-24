import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

interface IptuoData {
  todo: ToDo
}
interface OutputData {
  rta: boolean
}

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html'
})
export class TodoModalComponent {
  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: IptuoData
  ) {
    this.todo = data.todo
  }
  todo: ToDo
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  close() {
    this.dialogRef.close({
      rta: true
    });
  }
}
