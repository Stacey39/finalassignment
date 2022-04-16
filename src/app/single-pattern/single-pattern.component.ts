import { Component, OnInit } from '@angular/core';

import { CounterService } from './../shared/services/counter.service';

@Component({
  selector: 'app-single-pattern',
  templateUrl: './single-pattern.component.html',
  styleUrls: ['./single-pattern.component.scss']
})
export class SinglePatternComponent implements OnInit {

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
  }

  getCounter(): number {
    return this.counterService.counter;
  }

  incrementCounter(): void {
    this.counterService.incrementCounter();
  }

  decrementCounter(): void {
    this.counterService.decrementCounter();
  }

  resetCounter(): void {
    this.counterService.resetCounter();
  }

}
