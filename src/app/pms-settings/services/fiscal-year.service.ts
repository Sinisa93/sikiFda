import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { FiscalYear } from '../../interfaces/fiscal-year';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class FiscalYearService extends ApiService<FiscalYear>{

  constructor(http:HttpClient) {
    super(apiPaths.pmsSettings.accounting.fiscalYear,http)
   }
}
