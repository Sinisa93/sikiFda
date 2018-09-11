import { TestBed, inject } from '@angular/core/testing';

import { TaxesDataService } from './taxes-data.service';

describe('TaxesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxesDataService]
    });
  });

  it('should be created', inject([TaxesDataService], (service: TaxesDataService) => {
    expect(service).toBeTruthy();
  }));
});
