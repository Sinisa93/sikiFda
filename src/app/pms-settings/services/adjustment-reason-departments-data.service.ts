import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdjustmentReasonDepartmentsDataService {

  constructor() { }

  public adjustmentReasonDepartmentsData=new BehaviorSubject([]);
  public adjustmentReasonDepartmentsData$=this.adjustmentReasonDepartmentsData.asObservable();
}
