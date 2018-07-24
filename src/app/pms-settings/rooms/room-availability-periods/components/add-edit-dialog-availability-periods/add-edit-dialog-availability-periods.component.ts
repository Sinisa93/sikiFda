import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomAvailabilityPeriodsService } from '../../../../services/room-availability-periods.service';
import { trigger, style, state } from '@angular/animations';

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
export class AddEditDialogAvailabilityPeriodsComponent implements OnInit {

  constructor(
    private addEditDialogRef:MatDialogRef<AddEditDialogAvailabilityPeriodsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private roomAvailabilityPeriodsService:RoomAvailabilityPeriodsService
  ) { }

    private formRoomAvailabilityPeriods;
    labelPosition='before';
    private isVisiblePicker=false;

  ngOnInit() {
      this.formRoomAvailabilityPeriods=this.formBuilder.group(
        {
          id:[],
          txtTitle:['', Validators.required],
          dtPickerStart:['',Validators.required],
          dtPickerEnd:[],
          cbStatus:[],
          cbRepeat:[]
        }
      );
  }
  tooglePicker(){
    this.isVisiblePicker=!this.isVisiblePicker;
  }
}
