import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, Validators } from '../../../../../../../node_modules/@angular/forms';
import { CurrencyService } from '../../../../services/currency.service';
import { Currency } from '../../../../../interfaces/currency';
import { Subscription, Observable } from '../../../../../../../node_modules/rxjs';
import { Location } from '../../../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.css']
})
export class FormCurrencyComponent implements OnInit, OnDestroy {

  private _subscription = new Subscription();
  private currency:Currency[];
  private default : object = {
    currencyList : 0,

  }
  formCurrency : any;

  constructor(
    private location:Location,
    private formBuilder:FormBuilder,
    private currencyService:CurrencyService,
  ) { }

  private _currency:Observable<Currency[]>;

  ngOnInit() {
    this.formCurrency=this.formBuilder.group({
      currencyList:['',Validators.required],
      securityDeposit:[]
    });

    this._subscription.add(this.currencyService.getAll().subscribe(
      data=>{
        this.currency=data;
       
      }
    ))
  }
  
  goBack(){
    this.location.back();
  }
  resetForm(){
    this.formCurrency.reset();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
