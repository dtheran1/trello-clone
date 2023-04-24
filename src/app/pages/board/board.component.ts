import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Dialog } from '@angular/cdk/dialog'
import { Column, ToDo } from 'src/app/models/todo.model';

import { TodoModalComponent } from 'src/app/components/todo-modal/todo-modal.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent implements OnInit {
  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Keep learning'
        },
        {
          id: '3',
          title: 'Finish the Angular course'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '2',
          title: 'Buy a new pc'
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Clean a bedroom'
        },
      ]
    },
  ]
  constructor (
    private dialog: Dialog
  ) {}

  ngOnInit(): void {

  }

  drop(e: CdkDragDrop<ToDo[]>) {
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex)
    } else {
      transferArrayItem(
        e.previousContainer.data,
        e.container.data,
        e.previousIndex,
        e.currentIndex
      )
    }
  }

  addColumn () {
    this.columns.push({
      title: 'nuevo',
      todos: []
    })
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoModalComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        todo: todo
      }
    });

    dialogRef.closed.subscribe(output => {
      console.log(output);

    })
  }
}
