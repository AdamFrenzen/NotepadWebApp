import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from "../communicator.service";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  public open = true
  public selected: number = 0

  public notes = [{
    name: 'note1',
    content: 'content1',
    id: 0
  }, {
    name: 'note2',
    content: 'content2',
    id: 1
  }, {
    name: 'note3',
    content: 'content3',
    id: 2,
  }, {
    name: 'note4',
    content: 'content4',
    id: 3
  },]

  constructor(private communicator: CommunicatorService) {
    this.communicator.getAsideOpen().subscribe((res) => {
      this.open = res;
    });
  }

  ngOnInit() {
    this.select(this.selected);
    console.log(this.notes[this.selected].id)
    localStorage.setItem(String(this.notes[this.selected].id), this.notes[this.selected].content)
  }

  select(id: number) {
    this.selected = id;
    this.communicator.setSelectedNote(this.notes[this.selected]);
    console.log(this.notes)
  }

  addNote() {
    this.notes.push({name: 'new', content: 'newcontent', id: 4})
  }

}
