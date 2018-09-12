import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, Validators } from '../../../../../../../node_modules/@angular/forms';
import { CurrencyService } from '../../../../services/currency.service';
import { Currency } from '../../../../../interfaces/currency';
import { Subscription, Observable } from '../../../../../../../node_modules/rxjs';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { CurrencyOptionsService } from '../../../../services/currency-options.service';

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
    private currencyOptionsService:CurrencyOptionsService
  ) { }

  private _currency:Observable<Currency[]>;

  ngOnInit() {
    this.formCurrency=this.formBuilder.group({
      currencyList:['',Validators.required],
      securityDeposit:[],
      creditCardForReservations:[],
      creditCardForPOS:[],
      creditCardForProfiles:[]
    });

    this._subscription.add(this.currencyService.getAll().subscribe(
      data=>{
        this.currency=data;
       
      }
    ))
  }
  addData(){
    this._subscription.add(this.currencyService.getAll().subscribe(
      
      (data:any[])=>{
        data=data.concat({
          currencyList:this.formCurrency.get('currencyList').value
        });
        console.log(data);
      }
    
  ));
  this._subscription.add(this.currencyOptionsService.getAll().subscribe(
      
    (data:any[])=>{
      data=data.concat({
        securityDeposit:this.formCurrency.get('securityDeposit').value,
        creditCardForReservations:this.formCurrency.get('creditCardForReservations').value,
        creditCardForPOS:this.formCurrency.get('creditCardForPOS').value,
        creditCardForProfiles:this.formCurrency.get('creditCardForProfiles').value
      });
      console.log(data);
    }
  
));
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
