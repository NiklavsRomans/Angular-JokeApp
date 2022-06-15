import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JokeType } from 'src/app/models/joke-model';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss'],
})
export class JokeFormComponent implements OnInit {
  @Output() addJokeEvent = new EventEmitter<JokeType>();

  jokeForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildJokeForm();
  }

  addJoke(): void {
    this.jokeForm.markAllAsTouched();
    if (this.jokeForm.valid) {
      this.addJokeEvent.emit(this.jokeForm.value);
      this.jokeForm.reset();
    }
  }

  buildJokeForm(): void {
    this.jokeForm = this.fb.group({
      joke: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }
}
