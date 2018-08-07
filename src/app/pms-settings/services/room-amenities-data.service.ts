import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomAmenitiesDataService {

  constructor() { }
  
  public roomAmenitiesData=new BehaviorSubject([]);
  public roomAmenitiesData$=this.roomAmenitiesData.asObservable();
}
