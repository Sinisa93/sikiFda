import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RoomAmenity } from '../../interfaces/room-amenity';
import { HttpClient } from '@angular/common/http';
import { apiPaths } from '../../config/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomAmenitiesService extends ApiService<RoomAmenity>{

  constructor(http:HttpClient) {
    super(apiPaths.pmsSettings.rooms.roomAmenities,http);
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
