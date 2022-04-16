import { TaxFormService } from './../shared/services/tax-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.scss']
})
export class TaxFormComponent implements OnInit {

  newItem = {};

  constructor(
    public taxFormService: TaxFormService
  ) { }

  ngOnInit(): void {
  }

}
