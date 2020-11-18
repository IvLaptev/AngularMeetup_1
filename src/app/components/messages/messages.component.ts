import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/services/example/example.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {
  isShowing = true;

  message: string;

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
  }

  public getMessages(): Array<string> {
    return this.exampleService.getMessages()
  }
}
