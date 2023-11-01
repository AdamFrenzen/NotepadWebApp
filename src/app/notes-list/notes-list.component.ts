import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {

  public selected: number | null = 1

  notes = [{
    name: 'note1'
  }, {
    name: 'note2'
  }, {
    name: 'note3'
  }, {
    name: 'note4'
  },]
}
