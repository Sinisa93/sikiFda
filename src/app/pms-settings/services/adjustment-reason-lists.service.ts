import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { AdjustmentReasonList } from '../../interfaces/adjustment-reason-list';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AdjustmentReasonListsService extends ApiService<AdjustmentReasonList>{

  constructor(http:HttpClient) {
    super(apiPaths.pmsSettings.accounting.adjustmentReasonLists, http)
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
