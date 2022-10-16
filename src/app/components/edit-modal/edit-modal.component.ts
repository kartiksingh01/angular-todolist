import { Component, DoCheck, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Task } from 'src/app/model/Task.model';
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements DoCheck{
  task:Task;
  isOpen:boolean=false;
  newValue:string='';
  constructor(private appService:AppService) { }
  ngDoCheck(){
    if(!this.task){
      this.appService.taskEdited.subscribe((task:Task)=>{
        if(task){
          this.task=task;
          this.isOpen=true;
          this.newValue=this.task.name;
        }
      })
    }
  }
  closeModal(){
    this.isOpen=false;
  }
  makeChanges(newValue:string){
    this.task.name= newValue;
    this.closeModal()
  }
}
