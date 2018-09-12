import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription, Observable } from '../../../../../../../node_modules/rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, Validators, FormArray, FormControl } from '../../../../../../../node_modules/@angular/forms';
import { AddOnsService } from '../../../../services/add-ons.service';
import { AddOnsDataService } from '../../../../services/add-ons-data.service';
import { TaxesService } from '../../../../services/taxes.service';
import { AddOn } from '../../../../../interfaces/add-on';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';
import { RevenueAccountLabel } from '../../../../../interfaces/revenue-account-label';
import { RevenueAccountCategory } from '../../../../../interfaces/revenue-account-category';
import { RevenueAccountLabelsService } from '../../../../services/revenue-account-labels.service';
import { RevenueAccountCategoriesService } from '../../../../services/revenue-account-categories.service';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';

@Component({
  selector: 'app-form-add-ons',
  templateUrl: './form-add-ons.component.html',
  styleUrls: ['./form-add-ons.component.css']
})
export class FormAddOnsComponent implements OnInit, OnDestroy {

  private _subscription = new Subscription();
  private revenueLabels: RevenueAccountLabel[];
  private revenueCategories: RevenueAccountCategory[];

  private default : object = {
    revenueLabel : 0,
    revenueCategory : 0
  }
  private addons;

  formAddOns : any;

  constructor(
    public formAddOnsDialogRef:MatDialogRef<FormAddOnsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private AddOnsService:AddOnsService,
    private AddOnsDataService:AddOnsDataService,
    private taxesService : TaxesService,
    private revenueAccountLabelsService: RevenueAccountLabelsService,
    private revenueAccountCategoriesService:RevenueAccountCategoriesService

  ) { }

  private _addOns:Observable<AddOn[]>;

  ngOnInit() {

    this._subscription.add(this.AddOnsService.getAll().subscribe(
      data=>{
        if(this.data){
          let oneAddon=data.filter(x=>x.id==this.data['id']);
          let x=oneAddon[0];
          this.formAddOns.patchValue({
            title:x['title'],
            price:x['price'],
            type:x['type'],
            revenueLabel:x['revenueLabel']['id'],
            revenueCategory:x['revenueCategory']['id'],
            description:x['description'],
            status:x['status']
          });
        }
        this.addons=data;
      }
    ))
    this.formAddOns=this.formBuilder.group({
      id:[],
      title:['', Validators.required],
      price:['',Validators.required],
      taxes:this.formBuilder.array([]),
      type:['', Validators.required],
      revenueLabel:[],
      revenueCategory:[],
      description:[],
      status:[]
    });

    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
     // this._addOns=this.AddOnsService.getById(this.data['id']).pipe(
       // tap(items=>{
          // this.formAddOns.patchValue(items[0]);
          
       // })
      //)
    }

    this._subscription.add(this.taxesService.getAll().subscribe(
      data=>{
        for(let i=0; i<data.length; i++){
          (this.formAddOns.get('taxes') as FormArray).push(new FormControl({data:data[i], checked:false}))
        }
        for(let i=0; i<data.length; i++){
          if(this.data!=null){
            let oneAddon = this.addons.filter(x=>x.id == this.data['id']);
            if(ArrayFunctions.inArray(oneAddon[0].taxes.map(x=>x.id)[i],data.map(x=>x.id))){
              this.formAddOns.get('taxes').value[i+1].checked=true;
            }
          }
        }
      }
    ))

    this._subscription.add(this.revenueAccountLabelsService.getAll().subscribe(
      data=>{
        this.revenueLabels=data;
      }
    ))

    this._subscription.add(this.revenueAccountCategoriesService.getAll().subscribe(
      data=>{
        this.revenueCategories=data;
      }
    ))

    
  }

  addData(){
    this._subscription.add(this.AddOnsService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:6,
          title:this.formAddOns.get('title').value,
          description:this.formAddOns.get('description').value,
          status:this.formAddOns.get('status').value,
          revenueLabel:this.formAddOns.get('revenueLabel').value,
          revenueCategory:this.formAddOns.get('revenueCategory').value,
          price:this.formAddOns.get('price').value,
          type:this.formAddOns.get('type').value,
          taxes:this.formAddOns.get('taxes').value
        });
        console.log(data);
        this.AddOnsDataService.addOnsData.next(data);
      }
    ));

    this.formAddOnsDialogRef.close(this.formAddOns.value);
  }

  toggleCheckbox(isChecked,elementId){

    this.formAddOns.get('taxes').controls[elementId].value.checked=isChecked;
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
