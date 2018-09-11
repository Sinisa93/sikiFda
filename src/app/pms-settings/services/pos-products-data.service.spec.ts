import { TestBed, inject } from '@angular/core/testing';

import { PosProductsDataService } from './pos-products-data.service';

describe('PosProductsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosProductsDataService]
    });
  });

  it('should be created', inject([PosProductsDataService], (service: PosProductsDataService) => {
    expect(service).toBeTruthy();
  }));
});
