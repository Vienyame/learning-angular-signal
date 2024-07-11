import { TodoItem } from './todo-item.model';

export interface TodoListState {
    items: TodoItem[];
    filter: string;
}
