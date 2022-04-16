import { TaxFormService } from './../../shared/services/tax-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  newItem: any;

  constructor(
    public taxFormService: TaxFormService
  ) { }

  ngOnInit(): void {
  }

}
