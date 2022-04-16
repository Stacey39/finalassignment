import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output()
  onAddNewItem = new EventEmitter<any>();

  newItem: any = {
    description: '',
    hours: 0,
    hourlyRate: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(newItem: any): void {
    this.onAddNewItem.emit(newItem);
  }

}
