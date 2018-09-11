import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Currency } from '../../interfaces/currency';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends ApiService<Currency> {

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.accounting.currency,http)
  }
}
