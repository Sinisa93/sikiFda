import { TestBed, inject } from '@angular/core/testing';

import { PosProductsService } from './pos-products.service';

describe('PosProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosProductsService]
    });
  });

  it('should be created', inject([PosProductsService], (service: PosProductsService) => {
    expect(service).toBeTruthy();
  }));
});
