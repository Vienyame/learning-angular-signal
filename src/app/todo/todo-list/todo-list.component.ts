import { CommonModule, NgForOf } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { TodoItem } from '../models/todo-item.model';
import { TodoListService } from '../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [
        TodoItemComponent,
        CommonModule,
        NgForOf,
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatButton,
        MatLabel,
    ],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
    public todoItems: Signal<TodoItem[]>;
    public todoItemsTrackBy: any;
    public formGroup: FormGroup;

    constructor(private readonly todoListService: TodoListService) {
        this.todoItems = this.todoListService.todoItems;
        this.formGroup = new FormGroup({
            name: new FormControl(''),
        });
    }

    public deleteTodoItem(event: string) {}

    public editTodoItem(event: TodoItem) {}

    public isCompletedChange(event: boolean) {}

    public onSaveTodo() {}
}
