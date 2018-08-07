import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RoomAmenitiesService } from '../../../../services/room-amenities.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomAmenitiesDataService } from '../../../../services/room-amenities-data.service';
import { RoomAmenity } from '../../../../../interfaces/room-amenity';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-form-room-amenities',
  templateUrl: './form-room-amenities.component.html',
  styleUrls: ['./form-room-amenities.component.css']
})
export class FormRoomAmenitiesComponent implements OnInit, OnDestroy {

  constructor(
    public formRoomAmenitiesDialogRef:MatDialogRef<FormRoomAmenitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private roomAmenitiesService:RoomAmenitiesService,
    private roomAmenitiesDataService:RoomAmenitiesDataService
  ) { }

  private _roomAmenities:Observable<RoomAmenity[]>;
  private formRoomAmenities:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    description:[],
    status:[]
  });
  private subscription=new Subscription();
  // private _roomAmenity;

  ngOnInit() {
    
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._roomAmenities=this.roomAmenitiesService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formRoomAmenities.patchValue(items[0]);
          
        })
      )
    }
  }

  addData(){
    this.subscription.add(this.roomAmenitiesService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:11,
          title:this.formRoomAmenities.get('title').value,
          description:this.formRoomAmenities.get('description').value,
          status:this.formRoomAmenities.get('status').value
        });

        this.roomAmenitiesDataService.roomAmenitiesData.next(data);
      }
    ));

    this.formRoomAmenitiesDialogRef.close(this.formRoomAmenities.value);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
