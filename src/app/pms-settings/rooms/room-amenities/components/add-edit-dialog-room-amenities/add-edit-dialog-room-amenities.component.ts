import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomAmenitiesService } from '../../../../services/room-amenities.service';
import { FakeRoomAmenitiesService } from '../../services/fake-room-amenities.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-add-edit-dialog-room-amenities',
  templateUrl: './add-edit-dialog-room-amenities.component.html',
  styleUrls: ['./add-edit-dialog-room-amenities.component.css']
})
export class AddEditDialogRoomAmenitiesComponent implements OnInit, OnDestroy {

  constructor(
    public addEditDialogRef:MatDialogRef<AddEditDialogRoomAmenitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private roomAmenitiesService:RoomAmenitiesService,
    private roomAmenitiesFakeService:FakeRoomAmenitiesService
  ) { }

   _roomAmenities;
  private roomAmenity;
  private formRoomAmenities;
  private subscription=new Subscription();
  labelPosition='before';

  ngOnInit() {
    this.formRoomAmenities=this.formBuilder.group({
      id:[],
      title:['', Validators.required],
      description:[],
      status:[]
    });      
    
      this._roomAmenities=this.roomAmenitiesService.get(this.data["id"]).pipe(
        tap(
          items=>{
            this.formRoomAmenities.patchValue(items[0]);
            
            console.log(items[0]);
          }
          
        )
        
      );
      
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

        this.roomAmenitiesFakeService.roomAmenitiesFake.next(data);
      }
    ));
   this.addEditDialogRef.close(this.formRoomAmenities.value);
   
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
