import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteWritingAreaComponent } from './note-writing-area/note-writing-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteWritingAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
