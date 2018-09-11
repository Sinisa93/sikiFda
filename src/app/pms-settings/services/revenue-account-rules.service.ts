import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RevenueAccountRule } from '../../interfaces/revenue-account-rule';
import { apiPaths } from '../../config/api';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RevenueAccountRulesService extends ApiService<RevenueAccountRule>{

  constructor(http:HttpClient) {
    super(apiPaths.pmsSettings.accounting.revenueAccountRules,http)
   }
}
