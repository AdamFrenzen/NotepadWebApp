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
    name: 'note1'
  }, {
    name: 'note2'
  }, {
    name: 'note3'
  }, {
    name: 'note4'
  },]

  constructor(private communicator: CommunicatorService) {
    this.communicator.getAsideOpen().subscribe((res) => {
      this.open = res;
    });
  }

  addNote() {
    this.notes.push({name: 'new'})
  }

}
