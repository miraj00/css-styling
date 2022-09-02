import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    taskList: Todo[] = [
        {task: 'Wash dishes', isFinished: false, priority: 1},
        {task: 'Sweep floor', isFinished: true, priority: 0},
        {task: 'Buy groceries', isFinished: true, priority: 1},
        {task: 'Do laundry', isFinished: false, priority: 0},
        {task: 'Rearrange furniture', isFinished: false, priority: 2},
        {task: 'Clean bedroom', isFinished: false, priority: 2}
    ];

    color: string = 'red';

    getPriorityColor(task: Todo): string {
        if (task.priority === 0) {
          return "priority1";
        } else if (task.priority === 1) {
          return "priority2";
        } else {
          return "priority3";
        }
      }

}
