import { Component } from '@angular/core';
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from '../todo-input-add-itens/todo-input-add-itens.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoInputAddItensComponent, TodoButtonDeleteAllComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

}
