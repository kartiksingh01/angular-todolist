import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
})
export class ListComponentComponent implements OnInit {
  @Input() task:Task;
  constructor(private appService:AppService) { }
  ngOnInit(): void {
  }
  checkItem(checkedTask:Task){
    checkedTask.completed=!checkedTask.completed;
  }
  deleteItem(task:Task){
    this.appService.deleteTask(task.id);
  }
  editItem(task:Task){
    this.appService.taskEdited.emit(task);
  }
}
