import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeType } from 'src/app/models/joke-model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent {
  @Input() jokes?: JokeType[] = [];
  @Output() deleteJokeEvent = new EventEmitter<number>();

  deleteJoke(index: number): void {
    this.deleteJokeEvent.emit(index);
  }
}
