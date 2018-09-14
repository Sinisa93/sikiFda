import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../../node_modules/@angular/forms';
import { AdjustmentReasonListsService } from '../../../../services/adjustment-reason-lists.service';
import { AdjustmentReasonListsDataService } from '../../../../services/adjustment-reason-lists-data.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { AdjustmentReasonList } from '../../../../../interfaces/adjustment-reason-list';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';

@Component({
  selector: 'app-form-adjustment-reason-lists',
  templateUrl: './form-adjustment-reason-lists.component.html',
  styleUrls: ['./form-adjustment-reason-lists.component.css']
})
export class FormAdjustmentReasonListsComponent implements OnInit,OnDestroy {

  constructor(
    public formAdjustmentReasonListDialogRef:MatDialogRef<FormAdjustmentReasonListsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private adjustmentReasonListsService:AdjustmentReasonListsService,
    private adjustmentReasonListsDataService:AdjustmentReasonListsDataService
  ) { }

  private _adjustmentReasonLists:Observable<AdjustmentReasonList[]>;
  private formAdjustmentReasonLists:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    code:['', Validators.required]
  });

  private subscription=new Subscription();
  
  ngOnInit() {
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._adjustmentReasonLists=this.adjustmentReasonListsService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formAdjustmentReasonLists.patchValue(items[0]);
          
        })
      )
    }
  }

  addData(){
    this.subscription.add(this.adjustmentReasonListsService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          title:this.formAdjustmentReasonLists.get('title').value,
          code:this.formAdjustmentReasonLists.get('code').value,
          status:true
        });
        console.log(data)
        this.adjustmentReasonListsDataService.adjustmentReasonListsData.next(data);
      }
      
    ));

    this.formAdjustmentReasonListDialogRef.close(this.formAdjustmentReasonLists.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
