import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TodoItem } from './todo/models/todo-item.model';
import { TodoListService } from './todo/services/todo-list.service';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, TasksComponent, TodoListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    public todoItems: Signal<TodoItem[]>;

    constructor(private readonly todoListService: TodoListService) {
        this.todoItems = this.todoListService.todoItems;
    }
}
