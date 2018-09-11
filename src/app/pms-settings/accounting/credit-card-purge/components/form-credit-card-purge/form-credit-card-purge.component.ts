import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { FormBuilder, FormGroup } from '../../../../../../../node_modules/@angular/forms';
import { CreditCardPurgeService } from '../../../../services/credit-card-purge.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { CreditCardPurge } from '../../../../../interfaces/credit-card-purge';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';

@Component({
  selector: 'app-form-credit-card-purge',
  templateUrl: './form-credit-card-purge.component.html',
  styleUrls: ['./form-credit-card-purge.component.css']
})
export class FormCreditCardPurgeComponent implements OnInit, OnDestroy {

  constructor(
    private location:Location,
    private formBuilder:FormBuilder,
    private creditCardPurgeService:CreditCardPurgeService,
  ) { }

  private _creditCardPurge:Observable<CreditCardPurge[]>;
  private formCreditCardPurge:FormGroup=this.formBuilder.group({
  
    days:[],
   
  });

  private subscription=new Subscription();


  ngOnInit() {
    this._creditCardPurge=this.creditCardPurgeService.getAll().pipe(
      tap(items=>{
        this.formCreditCardPurge.patchValue(items[0]);
        
      })
    )
  }

  goBack(){
    this.location.back();
  }
  resetForm(){
    this.formCreditCardPurge.reset();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
