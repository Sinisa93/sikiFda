import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeRoomAvailabilityPeriodsService {

  constructor() { }

  public roomAvailabilityPeriodsFake=new BehaviorSubject([]);
  public roomAvailabilityPeriodsFake$=this.roomAvailabilityPeriodsFake.asObservable();
}
