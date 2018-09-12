import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CurrencyOption } from '../../interfaces/currency-option';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class CurrencyOptionsService extends ApiService<CurrencyOption>{

  constructor(http:HttpClient) {
    super(apiPaths.pmsSettings.accounting.currencyOptions,http);
   }
}
