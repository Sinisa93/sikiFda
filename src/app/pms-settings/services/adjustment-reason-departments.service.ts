import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/internal/operators';
import { ApiService } from '../../shared/services/api.service';
import { AdjustmentReasonDepartment } from '../../interfaces/adjustment-reason-department';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class AdjustmentReasonDepartmentsService extends ApiService<AdjustmentReasonDepartment>{

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.accounting.adjustmentReasonDepartments,http)
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
