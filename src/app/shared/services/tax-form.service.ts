import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxFormService {

  items: any[] = [
    {
      description: 'Web Design',
      hourlyRate: 50,
      hours: 8
    },
    {
      description: 'Web Development',
      hourlyRate: 75,
      hours: 4
    },
    {
      description: 'Project Management',
      hourlyRate: 55.3,
      hours: 3
    },
  ];

  constructor() { }

  addItem(newItem: any): void {
    this.items.push({ ...newItem });
  }

  calculateTotalHours(): number {
    let totalHours = 0;
    const tempList = this.items.filter((i) => +i.hours);
    tempList.forEach((i) => totalHours = this.sumHours(+totalHours, +i.hours ));
    return totalHours;
  }

  sumHours(currentHours: number, addHours: number): number {
    return currentHours + addHours;
  }

  calculateTotals(): { total: number, subTotal: number, taxes: number} {
    let subTotal = 0;
    this.items.forEach((i) => {
      subTotal += this.calculateItemTotal(+i.hourlyRate, i.hours);
    });

    return {
      taxes: subTotal * 0.13,
      subTotal,
      total: subTotal + (subTotal * 0.13),
    };
  }

  calculateItemTotal(hourlyRate: number, hours: number): number {
    return hourlyRate * hours;
  }
}
