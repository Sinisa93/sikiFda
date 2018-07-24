import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { config } from '../../config/global';
import { map, filter, catchError } from 'rxjs/internal/operators';
import { NotFoundError } from '../handlers/not-found-error';
import { BadInputError } from '../handlers/bad-input-error';
import { AppError } from '../handlers/app-error';

@Injectable()
export class ApiService<T> {

  protected baseUrl = config.baseApiUrl[config.env];

  constructor(private url : string, private http : HttpClient) { }

  getAll() : Observable<T[]>{
    return this.http.get<T[]>(`${ this.baseUrl + this.url}`).pipe(
      catchError(this.handleErrors)
    );
  }

  get(id : number) : Observable<T>{
    return this.http.get<T>(`${ this.baseUrl + this.url }`)
      .pipe(
        map((items : any[]) => {
          return items.filter( item => item.id == id);
        }),
        catchError(this.handleErrors)
      );
  }

  handleErrors(error : Response){
    let response;
    switch(error.status){
      case 404:
        response = new NotFoundError(error.json());
        break;
      case 401:
        response = new BadInputError();
        break;
      default:
        response = new AppError();
    }
    return throwError(response);
  }
}
