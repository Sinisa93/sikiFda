import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdjustmentReasonListsDataService {

  constructor() { }

  public adjustmentReasonListsData=new BehaviorSubject([]);
  public adjustmentReasonListsData$=this.adjustmentReasonListsData.asObservable();
}
