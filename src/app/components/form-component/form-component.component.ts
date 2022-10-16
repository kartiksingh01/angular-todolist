import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  tasks:Task[];
  constructor(private appService:AppService) {
  }

  ngOnInit(){
    this.tasks=this.appService.getTasks();
    this.appService.tasksChanged.subscribe((task:Task[])=>{
      this.tasks=task;
    })
  }

}
