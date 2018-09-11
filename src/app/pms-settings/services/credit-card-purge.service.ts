import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CreditCardPurge } from '../../interfaces/credit-card-purge';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class CreditCardPurgeService extends ApiService<CreditCardPurge>{

  constructor(http:HttpClient) {
    super(apiPaths.pmsSettings.accounting.creditCardPurge,http)
   }
}
