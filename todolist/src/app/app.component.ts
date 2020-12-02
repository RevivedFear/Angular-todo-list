import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  futureTodo: string = 'Some amazing todo that you want to add';
  currentId=3;
  todos: any[] = [
    {
      "name": "Build angular application",
      "show": true,
      "id":0
    },
    {
      "name": "learn new things",
      "show": true,
      "id":1
    },
    {
      "name": "take a walk",
      "show": true,
      "id":2

    },
    {
      "name": "create something awesome",
      "show": false,
      "id":3
    }
  ]

  deleteTodo(todoId: number): void {
    this.todos[todoId].show=false;
    this.futureTodo=this.todos[todoId].name;
    
  }

  addTodo(): void {
    this.todos.push({name:this.futureTodo,show:true,id:this.currentId+1});
    this.currentId++;
  }
}
