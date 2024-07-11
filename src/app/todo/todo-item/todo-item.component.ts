import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoItem } from '../models/todo-item.model';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
    @Input() public todoItem!: TodoItem;
    @Output() public isCompletedChange = new EventEmitter<boolean>();
    @Output() public delete = new EventEmitter<string>();
    @Output() public edit = new EventEmitter<TodoItem>();

    constructor() {}
}
