import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { ApiService } from '../../shared/services/api.service';
import { apiPaths } from '../../config/api';
import { CreditCardType } from '../../interfaces/credit-card-type';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditCardTypesService extends ApiService<CreditCardType>{

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.accounting.creditCardTypes, http);
  }

  getById(id)  :Observable<any>{
    return this.getAll().pipe(
      map(
        items=>{
          return items.filter(x => x.id == id)
        }
      )
    );
  }

}
