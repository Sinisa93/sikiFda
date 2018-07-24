import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/global';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class AdminLinksResolver implements Resolve<any> {

  constructor(private http : HttpClient) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any> {
    return this.http.get(`${ config.baseApiUrl[config.env] + apiPaths.adminLinks }`);
  }
}
