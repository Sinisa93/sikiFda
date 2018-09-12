import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from '../../../../../../../node_modules/rxjs';
import { Location } from '../../../../../../../node_modules/@angular/common';
import { FormBuilder, FormGroup } from '../../../../../../../node_modules/@angular/forms';
import { FiscalYearService } from '../../../../services/fiscal-year.service';
import { FiscalYear } from '../../../../../interfaces/fiscal-year';

@Component({
  selector: 'app-form-fiscal-year',
  templateUrl: './form-fiscal-year.component.html',
  styleUrls: ['./form-fiscal-year.component.css']
})
export class FormFiscalYearComponent implements OnInit, OnDestroy {
  @ViewChild("year") year : ElementRef
  private _subscription = new Subscription();
  
  constructor(
    private location:Location,
    private formBuilder:FormBuilder,
    private fiscalYearServices:FiscalYearService
  ) { }

  private _fiscalYear:FiscalYear[];
  private formFiscalYear:any;
  private years:string;
  ngOnInit() {
    this.formFiscalYear=this.formBuilder.group({
      title:[]
    });

    this._subscription.add(this.fiscalYearServices.getAll().subscribe(
        data=>{
          this.years=data[0].title;
          this._fiscalYear=data;
        }
    ));
  }

  addData(){
    this.year.nativeElement.textContent = this.formFiscalYear.get("title").value;
    this._subscription.add(this.fiscalYearServices.getAll().subscribe(
      
      (data:any[])=>{
        data=data.concat({
          title:this.formFiscalYear.get('title').value
        });
        console.log(data);
      
      }
    
  ));
  }

  goBack(){
    this.location.back();
  }


  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
