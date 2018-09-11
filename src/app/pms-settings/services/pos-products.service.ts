import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/internal/operators';
import { ApiService } from '../../shared/services/api.service';
import { PosProduct } from '../../interfaces/pos-product';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class PosProductsService extends ApiService<PosProduct> {

  constructor(http:HttpClient) {
    super(apiPaths.pmsSettings.pos.posProducts,http)
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
