import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeType } from 'src/app/models/joke-model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss'],
})
export class JokeCardComponent {
  @Input() joke?: JokeType;
  @Output() deleteJokeEvent = new EventEmitter<null>();

  showAnswer = false;

  handleShowAnswer(): void {
    this.showAnswer = !this.showAnswer;
  }

  deleteJoke(): void {
    this.deleteJokeEvent.emit();
  }
}
