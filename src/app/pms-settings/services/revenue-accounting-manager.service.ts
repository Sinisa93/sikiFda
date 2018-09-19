import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RevenueAccountingManager } from '../../interfaces/revenue-accounting-manager';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class RevenueAccountingManagerService extends ApiService<RevenueAccountingManager>{

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.accounting.revenueAccountingManager, http)
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
