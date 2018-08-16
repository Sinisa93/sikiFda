import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevenueAccountLabelsDataService {

  constructor() { }

  public RevenueAccountLabelsData=new BehaviorSubject([]);
  public RevenueAccountLabelsData$=this.RevenueAccountLabelsData.asObservable();
}
