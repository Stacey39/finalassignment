import { TestBed } from '@angular/core/testing';

import { TaxFormService } from './tax-form.service';

describe('TaxFormService', () => {
  let service: TaxFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SumHours', ()=> {
    expect(service.sumHours(100, 10)).toEqual(110);
  })

  it('Calculate item total', ()=> {
    expect(service.calculateItemTotal(100, 10)).toEqual(1000);
  })
});
