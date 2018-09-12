import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { NightAuditSetting } from '../../interfaces/night-audit-setting';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class NightAuditSettingsService extends ApiService<NightAuditSetting>{

  constructor(http:HttpClient) { 
    super(apiPaths.pmsSettings.accounting.nightAuditSettings,http);
  }
}
