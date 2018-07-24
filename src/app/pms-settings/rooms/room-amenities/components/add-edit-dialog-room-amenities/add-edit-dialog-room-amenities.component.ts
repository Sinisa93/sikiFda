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
export class AddEditDialogRoomAmenitiesComponent implements OnInit {

  constructor(
    private addEditDialogRef:MatDialogRef<AddEditDialogRoomAmenitiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private roomAmenitiesService:RoomAmenitiesService,
    private roomAmenitiesFakeService:FakeRoomAmenitiesService
  ) { }

  private _roomAmenities;
  private roomAmenity;
  private formRoomAmenities;
  private subscription:Subscription;
  labelPosition='before';

  ngOnInit() {
    this.formRoomAmenities=this.formBuilder.group({
      id:[],
      txtTitle:['', Validators.required],
      taDescription:[],
      cbStatus:[]
    });

    // this._roomAmenities=this.roomAmenitiesService.get(this.data["id"]).pipe(
    //   tap(
    //     items=>{
    //       this.formRoomAmenities.patchValue(items[0]);
    //       this.roomAmenity=items[0];
    //     }
    //   )
    // );
  }
  addData(){
    // this.subscription= this.roomAmenitiesService.getAll().subscribe(
    //   (data:any[])=>{
    //     data=data.concat({
    //       id:11,
    //       title:this.formRoomAmenities.get('txtTitle'),
    //       description:this.formRoomAmenities.get('taDescription'),
    //       status:this.formRoomAmenities.get('cbStatus')
    //     });

    //     this.roomAmenitiesFakeService.roomAmenitiesFake.next(data);
    //   }
    // );
   
  }

  // ngOnDestroy() :void{
  //   this.subscription.unsubscribe();
  // }
}
