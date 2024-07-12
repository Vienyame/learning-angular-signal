import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { TodoItem } from '../models/todo-item.model';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [ReactiveFormsModule, MatCard, MatCheckbox, MatIconButton, MatIcon],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
    @Input() public todoItem!: TodoItem;
    @Output() public isCompletedChange = new EventEmitter<boolean>();
    @Output() public delete = new EventEmitter<string>();
    @Output() public edit = new EventEmitter<TodoItem>();
    public isCompletedFormControl: FormControl = new FormControl();

    constructor() {}

    public onDelete() {}

    public onEdit() {}
}
