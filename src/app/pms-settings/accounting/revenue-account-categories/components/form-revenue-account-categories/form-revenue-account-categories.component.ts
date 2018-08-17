import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../../node_modules/@angular/forms';
import { RevenueAccountCategoriesService } from '../../../../services/revenue-account-categories.service';
import { RevenueAccountCategoriesDataService } from '../../../../services/revenue-account-categories-data.service';
import { RevenueAccountCategory } from '../../../../../interfaces/revenue-account-category';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';

@Component({
  selector: 'app-form-revenue-account-categories',
  templateUrl: './form-revenue-account-categories.component.html',
  styleUrls: ['./form-revenue-account-categories.component.css']
})
export class FormRevenueAccountCategoriesComponent implements OnInit, OnDestroy {

  constructor(
    public formRevenueAccountCategoriesDialogRef:MatDialogRef<FormRevenueAccountCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private revenueAccountCategoriesService:RevenueAccountCategoriesService,
    private revenueAccountCategoriesDataService:RevenueAccountCategoriesDataService
  ) { }

  private _revenueAccountCategories:Observable<RevenueAccountCategory[]>;
  private formRevenueAccountCategories:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    status:[]
  });

  private subscription=new Subscription();


  ngOnInit() {
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._revenueAccountCategories=this.revenueAccountCategoriesService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formRevenueAccountCategories.patchValue(items[0]);
          
        })
      )
    }
  }

  addData(){
    this.subscription.add(this.revenueAccountCategoriesService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:8,
          title:this.formRevenueAccountCategories.get('title').value,
          status:this.formRevenueAccountCategories.get('status').value
        });

        this.revenueAccountCategoriesDataService.RevenueAccountCategoriesData.next(data);
      }
    ));

    this.formRevenueAccountCategoriesDialogRef.close(this.formRevenueAccountCategories.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
