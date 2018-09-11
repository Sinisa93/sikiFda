import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosProductsDataService {

  constructor() { }
  public posProductsData=new BehaviorSubject([]);
  public posProductsData$=this.posProductsData.asObservable();
}
