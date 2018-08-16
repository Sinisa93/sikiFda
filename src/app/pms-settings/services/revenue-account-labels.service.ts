import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { ApiService } from '../../shared/services/api.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';
import { RevenueAccountLabel } from '../../interfaces/revenue-account-label';
import { map } from '../../../../node_modules/rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class RevenueAccountLabelsService extends ApiService<RevenueAccountLabel> {

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.accounting.revenueAccountLabels,http);
  }

  getById(id) : Observable<any>{
    return this.getAll().pipe(
      map(
        items =>{
          return items.filter(x => x.id == id)
        }
      )
    );
  }
}
