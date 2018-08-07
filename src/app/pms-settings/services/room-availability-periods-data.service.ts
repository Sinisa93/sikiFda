import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomAvailabilityPeriodsDataService {

  constructor() { }

  public roomAvailabilityPeriodsData=new BehaviorSubject([]);
  public roomAvailabilityPeriodsData$=this.roomAvailabilityPeriodsData.asObservable();
}
