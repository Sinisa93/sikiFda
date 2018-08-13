import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosPointsDataService {

  constructor() { }

  public posPointsData=new BehaviorSubject([]);
  public posPointsData$=this.posPointsData.asObservable();
}
