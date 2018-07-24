import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RoomAmenity } from '../../interfaces/room-amenity';
import { HttpClient } from '@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class RoomAmenitiesService extends ApiService<RoomAmenity>{

  constructor(http:HttpClient) {
    super(apiPaths.pmsSettings.rooms.roomAmenities,http);
   }
}
