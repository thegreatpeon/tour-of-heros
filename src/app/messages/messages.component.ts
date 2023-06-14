import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  displayMessages = false;

  toggleDisplay() {
    this.displayMessages = !this.displayMessages;
  }
  constructor( public messageService: MessageService){}
}
