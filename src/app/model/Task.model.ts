export class Task{
  public id:number;
  public name:string;
  public completed:boolean;
  constructor(id:number,name:string,completed:boolean){
    this.id=id
    this.name=name;
    this.completed=completed;
  }
}
