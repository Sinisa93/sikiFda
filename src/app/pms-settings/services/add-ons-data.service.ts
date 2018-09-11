import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddOnsDataService {

  constructor() { }

  public addOnsData=new BehaviorSubject([]);
  public addOnsData$=this.addOnsData.asObservable();
}
