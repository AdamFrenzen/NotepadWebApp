import { Component } from '@angular/core';
import {CommunicatorService} from "../communicator.service";

type note = {
  name: string;
  content: string;
  id: number;
}

@Component({
  selector: 'app-note-writing-area',
  templateUrl: './note-writing-area.component.html',
  styleUrls: ['./note-writing-area.component.css']
})
export class NoteWritingAreaComponent {
  selectedNote: note | null  = null

  constructor(private communicator: CommunicatorService) {
    this.communicator.getSelectedNote().subscribe((res) => {
      this.selectedNote = res
    })
  }
}
