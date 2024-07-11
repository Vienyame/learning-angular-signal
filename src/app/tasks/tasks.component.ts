import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [NgForOf, FormsModule, ReactiveFormsModule],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss',
})
export class TasksComponent {
    public tasks: string[] = [];

    public addTask(value: string) {
        this.tasks.push(value);
    }
}
