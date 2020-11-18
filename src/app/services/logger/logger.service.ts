import { Injectable } from '@angular/core';

export class LoggerService {

  constructor() { }

  write(message: string) {
    console.log(message);
  }
}
