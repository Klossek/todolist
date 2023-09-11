import { Component } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  constructor(private taskService: TaskService) {}

  tasks: Task[] = [];

  selectedTask?: Task;

  onSelect(task: Task) {
    this.selectedTask = task;
    console.log(task);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t: Task) => {
      return t.id !== task.id;
    });
  }

  addTask(task: Task) {
    console.log(task);
    this.tasks.push(task);
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    const taksksObs = this.taskService.getTasks();
    taksksObs.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
