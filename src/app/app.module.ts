import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokeFormComponent } from './components/jokes/joke-form/joke-form.component';
import { JokeListComponent } from './components/jokes/joke-list/joke-list.component';
import { JokeCardComponent } from './components/jokes/joke-card/joke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeFormComponent,
    JokeListComponent,
    JokeCardComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
