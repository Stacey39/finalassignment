import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;

  constructor() { }

  incrementCounter(): void {
    this.counter = this.counter + 1;
  }

  decrementCounter(): void {
    this.counter = this.counter - 1;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
