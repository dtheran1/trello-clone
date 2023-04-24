import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { ToDo } from 'src/app/models/todo.model';
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
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Keep learning'
    },
    {
      id: '3',
      title: 'Finish the Angular course'
    }
  ]


  doing: ToDo[] = [
    {
      id: '2',
      title: 'Buy a new pc'
    },
  ]

  done: ToDo[] = [
    {
      id: '4',
      title: 'Clean a bedroom'
    },
  ]
  constructor () {}

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
}
