import { TaxFormService } from './../../shared/services/tax-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  constructor(
    public taxFormService: TaxFormService
  ) { }

  ngOnInit(): void {
  }

}
