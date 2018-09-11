import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxesDataService {

  constructor() { }

  public taxesData=new BehaviorSubject([]);
  public taxesData$=this.taxesData.asObservable();

}
