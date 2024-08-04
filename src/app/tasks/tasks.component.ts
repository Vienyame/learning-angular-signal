import {
  Component,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core'
import { NgForOf } from '@angular/common'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  public tasks: string[] = []

  public addNewTask(task: string) {
    this.tasks.push(task)
  }
}
