import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RevenueAccountCategory } from '../../interfaces/revenue-account-category';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class RevenueAccountCategoriesService extends ApiService<RevenueAccountCategory>{

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.accounting.revenueAccountCategory, http);
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
