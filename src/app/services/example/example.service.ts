import { Injectable, Optional } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private messages = [
    "First",
    "Second",
    "Third"
  ]

  constructor(@Optional() private logger: LoggerService) { }
  
  public addMessage(message: string) {
    if (message != '') {
      this.messages.push(message);
      if (this.logger) {
        this.logger.write("Added message: " + message);
      }
    }
  }

  public getMessages(): Array<string> {
    return this.messages;
  }
}
