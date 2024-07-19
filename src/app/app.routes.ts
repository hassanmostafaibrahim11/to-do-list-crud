import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { HomeComponent } from './components/home/home.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/todos'},
  {path:'todos', component:TodosComponent,title:'todos'},
  {path:'home', component:HomeComponent,title:'home'},
  {path:'todos/:id', component:TodoDetailsComponent,title:'todo_Details'},
  {path:'contactUs', component:ContactUsComponent,title:'Contact Us'},
  {path:'aboutUs', component:AboutUsComponent,title:'About Us'},
  {path:'**', component:NotFoundComponent,title:'Not Found!'},
];
