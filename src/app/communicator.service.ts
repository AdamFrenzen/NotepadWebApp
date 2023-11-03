import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private currentAsideOpen = true;
  public asideOpen: Subject<boolean> = new Subject<boolean>();

  // TODO: Adjust type any when a note type is decided
  public selectedNoteId: Subject<any> = new Subject<any>();

  toggleAsideOpen() {
    this.currentAsideOpen = ! this.currentAsideOpen;
    this.asideOpen.next(this.currentAsideOpen);
  }

  getAsideOpen() {
    return this.asideOpen;
  }

  setSelectedNote(note: any) {
    this.selectedNoteId.next(note);
  }

  getSelectedNote() {
    return this.selectedNoteId;
  }

}
