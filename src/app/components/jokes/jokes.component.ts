import { Component } from '@angular/core';
import { JokeType } from 'src/app/models/joke-model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  jokes: JokeType[] = [];

  addJoke(joke: JokeType): void {
    this.jokes.push(joke);
  }

  deleteJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
}
