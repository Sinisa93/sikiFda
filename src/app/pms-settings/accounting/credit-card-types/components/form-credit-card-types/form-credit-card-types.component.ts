import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../../node_modules/@angular/forms';
import { CreditCardTypesService } from '../../../../services/credit-card-types.service';
import { CreditCardTypesDataService } from '../../../../services/credit-card-types-data.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { CreditCardType } from '../../../../../interfaces/credit-card-type';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';

@Component({
  selector: 'app-form-credit-card-types',
  templateUrl: './form-credit-card-types.component.html',
  styleUrls: ['./form-credit-card-types.component.css']
})
export class FormCreditCardTypesComponent implements OnInit {

  constructor(
    public formCreditCardTypesDialogRef:MatDialogRef<FormCreditCardTypesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private creditCardTypesService:CreditCardTypesService,
    private creditCardTypesDataService:CreditCardTypesDataService
  ) { }

  private _creditCardTypes:Observable<CreditCardType[]>;
  private formCreditCardTypes:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    status:[]
  });

  private subscription=new Subscription();

  ngOnInit() {
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._creditCardTypes=this.creditCardTypesService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formCreditCardTypes.patchValue(items[0]);
          
        })
      )
    }
  }

  addData(){
    this.subscription.add(this.creditCardTypesService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:8,
          title:this.formCreditCardTypes.get('title').value,
          status:this.formCreditCardTypes.get('status').value
        });

        this.creditCardTypesDataService.creditCardTypesData.next(data);
      }
    ));

    this.formCreditCardTypesDialogRef.close(this.formCreditCardTypes.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
