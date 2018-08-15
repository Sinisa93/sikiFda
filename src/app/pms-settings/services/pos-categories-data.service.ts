import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosCategoriesDataService {

  constructor() { }

  public posCategoriesData=new BehaviorSubject([]);
  public posCategoriesData$=this.posCategoriesData.asObservable();
}
