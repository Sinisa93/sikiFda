import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../../node_modules/@angular/forms';
import { AdjustmentReasonDepartmentsService } from '../../../../services/adjustment-reason-departments.service';
import { AdjustmentReasonDepartmentsDataService } from '../../../../services/adjustment-reason-departments-data.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { AdjustmentReasonDepartment } from '../../../../../interfaces/adjustment-reason-department';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';

@Component({
  selector: 'app-form-adjustment-reason-departments',
  templateUrl: './form-adjustment-reason-departments.component.html',
  styleUrls: ['./form-adjustment-reason-departments.component.css']
})
export class FormAdjustmentReasonDepartmentsComponent implements OnInit, OnDestroy {

  constructor(
    public formAdjustmentReasonDepartmentDialogRef:MatDialogRef<FormAdjustmentReasonDepartmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private adjustmentReasonDepartmentsService:AdjustmentReasonDepartmentsService,
    private adjustmentReasonDepartmentsDataService:AdjustmentReasonDepartmentsDataService
  ) { }

  private _adjustmentReasonDepartments:Observable<AdjustmentReasonDepartment[]>;
  private formAdjustmentReasonDepartment:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    code:['', Validators.required]
  });

  private subscription=new Subscription();

  ngOnInit() {
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._adjustmentReasonDepartments=this.adjustmentReasonDepartmentsService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formAdjustmentReasonDepartment.patchValue(items[0]);
          
        })
      )
    }
  }

  addData(){
    this.subscription.add(this.adjustmentReasonDepartmentsService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          title:this.formAdjustmentReasonDepartment.get('title').value,
          code:this.formAdjustmentReasonDepartment.get('code').value,
          status:true
        });
        console.log(data)
        this.adjustmentReasonDepartmentsDataService.adjustmentReasonDepartmentsData.next(data);
      }
      
    ));

    this.formAdjustmentReasonDepartmentDialogRef.close(this.formAdjustmentReasonDepartment.value);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
