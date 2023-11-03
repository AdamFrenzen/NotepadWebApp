import { Component } from '@angular/core';
import {CommunicatorService} from "../communicator.service";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  public open = true
  public selected: number | null = null

  public notes = [{
    name: 'note1',
    content: 'content1'
  }, {
    name: 'note2',
    content: 'content2'
  }, {
    name: 'note3',
    content: 'content3'
  }, {
    name: 'note4',
    content: 'content4'
  },]

  constructor(private communicator: CommunicatorService) {
    this.communicator.getAsideOpen().subscribe((res) => {
      this.open = res;
    });
  }

  select(id: number) {
    this.selected = id;
    this.communicator.setSelectedNote(this.notes[this.selected]);
  }

  addNote() {
    this.notes.push({name: 'new', content: 'newcontent'})
  }

}
