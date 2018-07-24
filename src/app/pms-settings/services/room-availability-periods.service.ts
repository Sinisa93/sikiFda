import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RoomAvailabilityPeriod } from '../../interfaces/room-availability-period';
import { HttpClient } from '@angular/common/http';
import { apiPaths } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class RoomAvailabilityPeriodsService extends ApiService<RoomAvailabilityPeriod> {

  constructor(http: HttpClient) {
    super(apiPaths.pmsSettings.rooms.roomAvailabilityPeriods, http);
   }
}
