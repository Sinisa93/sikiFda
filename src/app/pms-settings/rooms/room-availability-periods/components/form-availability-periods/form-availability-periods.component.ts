import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RoomAvailabilityPeriodsService } from '../../../../services/room-availability-periods.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomAvailabilityPeriodsDataService } from '../../../../services/room-availability-periods-data.service';
import { RoomAvailabilityPeriod } from '../../../../../interfaces/room-availability-period';
import { Observable, Subscription } from 'rxjs';
import { trigger, state, style } from '@angular/animations';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-form-availability-periods',
  templateUrl: './form-availability-periods.component.html',
  styleUrls: ['./form-availability-periods.component.css'],
  animations:[
    trigger('showPicker', [
      state('true', style({ display: 'block'})),
      state('false', style({ display: 'none'}))
    ])
  ]
})

export class FormAvailabilityPeriodsComponent implements OnInit, OnDestroy {

  constructor(
    private formRoomAvailabilityPeriodsDialogRef:MatDialogRef<FormAvailabilityPeriodsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private roomAvailabilityPeriodsService:RoomAvailabilityPeriodsService,
    private roomAvailabilityPeriodsDataService:RoomAvailabilityPeriodsDataService
  ) { }

  private _roomAvailabilityPeriods:Observable<RoomAvailabilityPeriod[]>;
  private formRoomAvailabilityPeriods:FormGroup=this.formBuilder.group(
    {
      id:[],
      title:['', Validators.required],
      start:['',Validators.required],
      end:[],
      status:[],
      repeat:[]
    }
  );
  private isVisiblePicker=false;
  private subscription=new Subscription();

  ngOnInit() {
    //edit
    (this.data['id'] == null) ? this.data=null : '';

    if(this.data){
      this._roomAvailabilityPeriods=this.roomAvailabilityPeriodsService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formRoomAvailabilityPeriods.patchValue(items[0]);
        })
      )
    }
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

        this.roomAvailabilityPeriodsDataService.roomAvailabilityPeriodsData.next(data);
      }
    ));

    this.formRoomAvailabilityPeriodsDialogRef.close(this.formRoomAvailabilityPeriods.value);
  }

  tooglePicker(){
    this.isVisiblePicker=!this.isVisiblePicker;
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
