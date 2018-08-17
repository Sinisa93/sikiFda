import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevenueAccountCategoriesDataService {

  constructor() { }

  public RevenueAccountCategoriesData=new BehaviorSubject([]);
  public RevenueAccountCategoriesData$=this.RevenueAccountCategoriesData.asObservable();
}
