import { Component, DoCheck } from '@angular/core';
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from '../todo-input-add-itens/todo-input-add-itens.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoInputAddItensComponent, TodoButtonDeleteAllComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];

  constructor() {
    this.loadTaskList();
  }

  ngDoCheck() {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem("list", JSON.stringify(this.taskList));
  }

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
    this.saveTaskList();
  }

  public setEmitTaskList(task: string) {
    this.taskList.push({ task, checked: false });
    this.saveTaskList();
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente deletar tudo?");
    if (confirm) {
      this.taskList = [];
      this.saveTaskList();
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  private saveTaskList() {
    localStorage.setItem("list", JSON.stringify(this.taskList));
  }

  private loadTaskList() {
    const storedList = localStorage.getItem("list");
    if (storedList) {
      this.taskList = JSON.parse(storedList);
      console.log(this.taskList);
    }
  }
}
