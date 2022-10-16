import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  task:string='';
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
  addTask(task:string){
    this.appService.addTasktoList(new Task(Date.now(),task,false));
    this.task='';
  }
}
