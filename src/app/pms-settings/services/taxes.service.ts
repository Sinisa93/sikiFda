import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/internal/operators';
import { ApiService } from '../../shared/services/api.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';
import { Tax } from '../../interfaces/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxesService extends ApiService<Tax> {

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.accounting.taxes, http);
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
