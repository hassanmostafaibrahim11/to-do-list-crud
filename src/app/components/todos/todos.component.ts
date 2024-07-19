import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { ToDoService } from '../../services/to-do.service';
import { FormsModule } from '@angular/forms';
import { RouterModule,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule,RouterLink ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos:Todo[] = [];
  newTodo:Todo = {} as Todo
  constructor(private todoService:ToDoService){}
ngOnInit(): void {
  this.getToDos()
}
getToDos(){
  this.todoService.getTodos().subscribe(x=>{
    this.todos = x;
  })
}
createToDo():void{
  const newToDo1 = {id:this.newTodo.id,title:this.newTodo.title, completed:false};
  this.newTodo = newToDo1;
  this.todoService.createTodo(newToDo1).subscribe(todo=>{
    this.todos.push(todo);
  })

}
deleteToDo(toDoId:string):void{
  this.todoService.deleteToDo(toDoId).subscribe(()=>{
    this.todos = this.todos.filter(todo=>todo.id!==toDoId)
  })
}

}
