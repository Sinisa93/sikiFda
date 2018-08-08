import { TestBed, inject } from '@angular/core/testing';

import { OrderRoomsService } from './order-rooms.service';

describe('OrderRoomsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderRoomsService]
    });
  });

  it('should be created', inject([OrderRoomsService], (service: OrderRoomsService) => {
    expect(service).toBeTruthy();
  }));
});
