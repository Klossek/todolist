import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task?: Task;
  @Output() deleteTaskEvent = new EventEmitter<Task>();
  constructor(private taskService: TaskService) {}
  delete = (task: Task) => {
    const obs = this.taskService.delete(task);
    obs.subscribe(() => {
      this.deleteTaskEvent.emit(task);
    });
  };

  toggleCompleted = (task: Task) => {
    const obs = this.taskService.toggleCompleted(task);
    obs.subscribe(() => {});
  };
}
