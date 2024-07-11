import { computed, Injectable, signal } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';
import { TodoListState } from '../models/todo-list-state.model';

@Injectable({
    providedIn: 'root',
})
export class TodoListService {
    public state = signal<TodoListState>({
        items: [],
        filter: '',
    });
    public todoItems = computed(() => this.state().items);
    constructor() {
        this.state.update(state => ({
            ...this.state,
            items: [
                {
                    id: 1,
                    name: 'Create YT video',
                    isCompleted: false,
                } as TodoItem,
                {
                    id: 2,
                    name: 'Go to the gym',
                    isCompleted: false,
                } as TodoItem,
                {
                    id: 3,
                    name: 'Buy flowers',
                    isCompleted: false,
                } as TodoItem,
            ],
            filter: 'all',
        }));
    }
}
