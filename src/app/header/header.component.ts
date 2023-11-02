import { Component } from '@angular/core';
import {CommunicatorService} from "../communicator.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public right = false

  constructor(private communicator: CommunicatorService) {
  }


  toggleSidebar() {
    this.right = ! this.right;
    this.communicator.toggleAsideOpen();
  }
}
