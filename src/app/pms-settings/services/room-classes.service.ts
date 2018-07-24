import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RoomClass } from '../../interfaces/room-class';
import { HttpClient } from '@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class RoomClassesService extends ApiService<RoomClass>{
  
  constructor(http : HttpClient) {
    super(apiPaths.pmsSettings.rooms.roomClasses, http);
  }
}
