import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../../node_modules/@angular/forms';
import { RevenueAccountLabelsService } from '../../../../services/revenue-account-labels.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { RevenueAccountLabel } from '../../../../../interfaces/revenue-account-label';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';
import { RevenueAccountLabelsDataService } from '../../../../services/revenue-account-labels-data.service';

@Component({
  selector: 'app-form-revenue-account-labels',
  templateUrl: './form-revenue-account-labels.component.html',
  styleUrls: ['./form-revenue-account-labels.component.css']
})
export class FormRevenueAccountLabelsComponent implements OnInit, OnDestroy {

  constructor(
    public formRevenueAccountLabelsDialogRef:MatDialogRef<FormRevenueAccountLabelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private revenueAccountLabelsService:RevenueAccountLabelsService,
    private revenueAccountLabelsDataService:RevenueAccountLabelsDataService
  ) { }

  private _revenueAccountLabels:Observable<RevenueAccountLabel[]>;
  private formRevenueAccountLabels:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    status:[]
  });

  private subscription=new Subscription();

  ngOnInit() {
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._revenueAccountLabels=this.revenueAccountLabelsService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formRevenueAccountLabels.patchValue(items[0]);
          
        })
      )
    }
  }

  addData(){
    this.subscription.add(this.revenueAccountLabelsService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:8,
          title:this.formRevenueAccountLabels.get('title').value,
          status:this.formRevenueAccountLabels.get('status').value
        });

        this.revenueAccountLabelsDataService.RevenueAccountLabelsData.next(data);
      }
    ));

    this.formRevenueAccountLabelsDialogRef.close(this.formRevenueAccountLabels.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
