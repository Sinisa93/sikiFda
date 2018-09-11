import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../../node_modules/@angular/forms';
import { TaxesService } from '../../../../services/taxes.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { Tax } from '../../../../../interfaces/tax';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';
import { trigger, state, style } from '../../../../../../../node_modules/@angular/animations';
import { TaxesDataService } from '../../../../services/taxes-data.service';

@Component({
  selector: 'app-form-taxes',
  templateUrl: './form-taxes.component.html',
  styleUrls: ['./form-taxes.component.css'],

})
export class FormTaxesComponent implements OnInit, OnDestroy {

  
  constructor(
    public formTaxesDialogRef:MatDialogRef<FormTaxesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private taxesService:TaxesService,
    private taxesDataService:TaxesDataService
  ) { }

 
  private _taxes:Observable<Tax[]>;
  private formTaxes:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    isPerReservation:[], 
    status:[],
    isInclusiveTax:[],
    tax: this.formBuilder.group({
      percentage:['', Validators],
      isTaxPercentage:[],
      fixedAmountTax:['', Validators],
    })
  });
  private isVisiblePercentage= 'tax';

  private subscription=new Subscription();
  ngOnInit() {
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._taxes=this.taxesService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formTaxes.patchValue(items[0]);
          console.log(this.formTaxes);
        })
      )
    }
  }

  addData(){
    this.subscription.add(this.taxesService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:6,
          title:this.formTaxes.get('title').value,
          
          fixedAmountTax:this.formTaxes.get('tax.fixedAmountTax').value,
          
          
          isInclusiveTax:this.formTaxes.get('isInclusiveTax').value,
          status:this.formTaxes.get('status').value,
          tax: {
            isPerReservation:this.formTaxes.get('isPerReservation').value,
            isTaxPercentage:this.formTaxes.get('tax.isTaxPercentage').value,
            percentage:this.formTaxes.get('tax.percentage').value,
          }
        });
        console.log(data);
        this.taxesDataService.taxesData.next(data);
      }
    ));

    this.formTaxesDialogRef.close(this.formTaxes.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setValue(value: string) {
    this.isVisiblePercentage = value;
  }

  tooglePercentage(value: string){
    return (this.isVisiblePercentage === value);
  }

}
