import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../model/Task.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  tasksChanged = new EventEmitter<Task[]>();
  taskEdited = new EventEmitter<Task>();
  private tasks:Task[]=[];
  constructor() { }
  getTasks(){
    return this.tasks.slice();
  }
  addTasktoList(task:Task){
    this.tasks.push(task);
    this.tasksChanged.emit(this.tasks.slice());
  }
  deleteTask(id:number){
    this.tasks =this.tasks.filter(x=>x.id!=id);
    this.tasksChanged.emit(this.tasks.slice());
  }

}
