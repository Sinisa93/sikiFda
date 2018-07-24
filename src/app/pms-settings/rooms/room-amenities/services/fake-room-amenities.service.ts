import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeRoomAmenitiesService {

  constructor() { }

  public roomAmenitiesFake=new BehaviorSubject([]);
  public roomAmenitiesFake$=this.roomAmenitiesFake.asObservable();
}
