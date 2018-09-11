import { TestBed, inject } from '@angular/core/testing';

import { AddOnsDataService } from './add-ons-data.service';

describe('AddOnsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddOnsDataService]
    });
  });

  it('should be created', inject([AddOnsDataService], (service: AddOnsDataService) => {
    expect(service).toBeTruthy();
  }));
});
