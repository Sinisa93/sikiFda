import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomAvailabilityPeriodsService } from '../../../../services/room-availability-periods.service';
import { trigger, style, state } from '@angular/animations';
import { tap } from 'rxjs/internal/operators';
import { FakeRoomAvailabilityPeriodsService } from '../../services/fake-room-availability-periods.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-edit-dialog-availability-periods',
  templateUrl: './add-edit-dialog-availability-periods.component.html',
  styleUrls: ['./add-edit-dialog-availability-periods.component.css'],
  animations:[
    trigger('showPicker', [
      state('true', style({ display: 'block'})),
      state('false', style({ display: 'none'}))
    ])
  ]
})
export class AddEditDialogAvailabilityPeriodsComponent implements OnInit, OnDestroy {

  constructor(
    private addEditDialogRef:MatDialogRef<AddEditDialogAvailabilityPeriodsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private roomAvailabilityPeriodsService:RoomAvailabilityPeriodsService,
    private fakeRoomAvailabilityPeriodsService:FakeRoomAvailabilityPeriodsService
  ) { }

    private formRoomAvailabilityPeriods;
    private _roomAvailabilityPeriods;
    labelPosition='before';
    private isVisiblePicker=false;
    private subscription=new Subscription();

  ngOnInit() {
      this.formRoomAvailabilityPeriods=this.formBuilder.group(
        {
          id:[],
          title:['', Validators.required],
          start:['',Validators.required],
          end:[],
          status:[],
          repeat:[]
        }
      );

      this._roomAvailabilityPeriods=this.roomAvailabilityPeriodsService.get(this.data["id"]).pipe(
        tap(items=>{
          this.formRoomAvailabilityPeriods.patchValue(items[0]);
          console.log(items[0]);
        })
      );
      
  }
  addData(){
    this.subscription.add(this.roomAvailabilityPeriodsService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:6,
          title: this.formRoomAvailabilityPeriods.get('title').value,
          start: this.formRoomAvailabilityPeriods.get('start').value,
          end: this.formRoomAvailabilityPeriods.get('end').value,
          status: this.formRoomAvailabilityPeriods.get('status').value,
          repeat: this.formRoomAvailabilityPeriods.get('repeat').value
        });

        this.fakeRoomAvailabilityPeriodsService.roomAvailabilityPeriodsFake.next(data);
      }
    ));
    this.addEditDialogRef.close(this.formRoomAvailabilityPeriods.value);
  }
  tooglePicker(){
    this.isVisiblePicker=!this.isVisiblePicker;
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
