import { TestBed, inject } from '@angular/core/testing';

import { AddOnsService } from './add-ons.service';

describe('AddOnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddOnsService]
    });
  });

  it('should be created', inject([AddOnsService], (service: AddOnsService) => {
    expect(service).toBeTruthy();
  }));
});
