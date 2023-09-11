import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() createTaskEvent = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  name = '';
  description = '';

  public log = (x: any) => {
    console.log(x);
  };

  public create = () => {
    const obs = this.taskService.create(this.name, this.description);
    obs.subscribe((task: Task) => {
      this.createTaskEvent.emit(task);
      this.name = '';
      this.description = '';
    });
  };
}
