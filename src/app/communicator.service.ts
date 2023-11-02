import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  currentAsideOpen = true
  asideOpen: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  toggleAsideOpen() {
    this.currentAsideOpen = ! this.currentAsideOpen
    this.asideOpen.next(this.currentAsideOpen);
  }

  getAsideOpen() {
    return this.asideOpen;
  }

}
