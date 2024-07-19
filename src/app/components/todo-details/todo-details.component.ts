import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})

export class TodoDetailsComponent implements OnInit{
  todo:Todo|undefined ;
constructor(private router:Router, private Activated:ActivatedRoute, private todoService:ToDoService){}

ngOnInit(): void {
  this.getToDo();
}

getToDo(){
  const id = String(this.Activated.snapshot.paramMap.get('id'));
  this.todoService.getToDoById(id).subscribe(todo=>{
    this.todo = todo;
  })
}

updateToDo():void{
  if(this.todo){
    this.todoService.updateToDo(this.todo).subscribe(()=>{
      this.router.navigate(['/todos'])
    })
  }
}
}
