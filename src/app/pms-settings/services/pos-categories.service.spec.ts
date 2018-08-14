import { TestBed, inject } from '@angular/core/testing';

import { PosCategoriesService } from './pos-categories.service';

describe('PosCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosCategoriesService]
    });
  });

  it('should be created', inject([PosCategoriesService], (service: PosCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
