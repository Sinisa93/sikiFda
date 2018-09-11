import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardTypesDataService {

  constructor() { }

  public creditCardTypesData=new BehaviorSubject([]);
  public creditCardTypesData$=this.creditCardTypesData.asObservable();
}
