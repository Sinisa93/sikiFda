import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { apiPaths } from '../../config/api';
import { ApiService } from '../../shared/services/api.service';
import { OrderRoom } from '../../interfaces/order-room';

@Injectable({
  providedIn: 'root'
})
export class OrderRoomsService extends ApiService<OrderRoom>{

  constructor(http: HttpClient) { 
    super(apiPaths.pmsSettings.rooms.orderRooms, http);
  }
}
