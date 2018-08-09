import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { PosPoint } from '../../interfaces/pos-point';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PosPointsService extends ApiService<PosPoint>{

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.pos.posPoints, http);
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
