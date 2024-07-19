import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private api = 'http://localhost:3000/todos'
  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.api)
  }

  createTodo(todo:Todo):Observable<Todo>{
    return this.httpClient.post<Todo>(this.api, JSON.stringify(todo));
  }

  updateToDo(todo:Todo):Observable<Todo>{
    return this.httpClient.put<Todo>(`${this.api}/${todo.id}`,todo);
  }

  getToDoById(id:string):Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.api}/${id}`)
  }


  deleteToDo(id:string):Observable<void>{
    return this.httpClient.delete<void>(`${this.api}/${id}`);
  }
}
