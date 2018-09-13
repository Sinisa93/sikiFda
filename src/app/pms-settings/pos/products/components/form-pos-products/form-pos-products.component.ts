import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '../../../../../../../node_modules/@angular/forms';
import { PosProductsService } from '../../../../services/pos-products.service';
import { PosProductsDataService } from '../../../../services/pos-products-data.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { PosProduct } from '../../../../../interfaces/pos-product';
import { PosPointsService } from '../../../../services/pos-points.service';
import { PosPoint } from '../../../../../interfaces/pos-point';
import { TaxesService } from '../../../../services/taxes.service';
import { PosCategory } from '../../../../../interfaces/pos-category';
import { PosCategoriesService } from '../../../../services/pos-categories.service';
import { RevenueAccountLabelsService } from '../../../../services/revenue-account-labels.service';
import { RevenueAccountLabel } from '../../../../../interfaces/revenue-account-label';
import { RevenueAccountCategory } from '../../../../../interfaces/revenue-account-category';
import { RevenueAccountCategoriesService } from '../../../../services/revenue-account-categories.service';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';
import { ArrayFunctions } from '../../../../../shared/functions/array-functions';

@Component({
  selector: 'app-form-pos-products',
  templateUrl: './form-pos-products.component.html',
  styleUrls: ['./form-pos-products.component.css']
})
export class FormPosProductsComponent implements OnInit, OnDestroy {

  private _subscription = new Subscription();
  private points : PosPoint[];
  private categories : PosCategory[];
  private revenueLabels: RevenueAccountLabel[];
  private revenueCategories: RevenueAccountCategory[];

  private default : object = {
    posPoint : 0,
    category : 0,
    revenueLabel : 0,
    revenueCategory : 0
  }
  
  formPosProducts : any;
  constructor(
    public formPosProductsDialogRef:MatDialogRef<FormPosProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private posProductsService:PosProductsService,
    private posProductsDataService:PosProductsDataService,
    private posPointService:PosPointsService,
    private taxesService : TaxesService,
    private posCategoriesService:PosCategoriesService,
    private revenueAccountLabelsService: RevenueAccountLabelsService,
    private revenueAccountCategoriesService:RevenueAccountCategoriesService
  ) { }

  private _posProducts:Observable<PosProduct[]>;
  private posProducts;
  ngOnInit() {

    this._subscription.add(this.posProductsService.getAll().subscribe(
      data=>{
        if(this.data){
          let oneProduct=data.filter(x=>x.id == this.data['id']);
          let x=oneProduct[0];
          this.formPosProducts.patchValue({
            name:x['name'],
            title:x['title'],
            posPoint:x['posPoint']['title'],
            category:x['category']['title'],
            revenueLabel:x['revenueLabel']['title'],
            revenueCategory:x['revenueCategory']['title'],
            price:x['price'],
            description:x['description'],
            status:x['status']
          });
        }
        this.posProducts=data;
      }
    ));
    this.formPosProducts=this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      title:['', Validators.required],
      posPoint:[],
      category:[],
      revenueLabel:[],
      revenueCategory:[],
      price:['',Validators.required],
      taxes:this.formBuilder.array([]),
      description:[],
      status:[]
    });

    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      // this._posProducts=this.posProductsService.getById(this.data['id']).pipe(
      //   tap(items=>{
      //     this.formPosProducts.patchValue(items[0]);
          
      //   })
      // )
    }

    this._subscription.add(this.posPointService.getAll().subscribe(
      data=>{
        this.points = data;
      }
    ))

    this._subscription.add(this.posCategoriesService.getAll().subscribe(
      data=>{
        this.categories=data;
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

    this._subscription.add(this.taxesService.getAll().subscribe(
      data=>{
        console.log(this.formPosProducts.get('taxes'));
        for(let i=0;i<data.length;i++)
        (this.formPosProducts.get('taxes') as FormArray).push(new FormControl({data:data[i], checked:false}))

        for(let i=0; i<data.length; i++){
          if(this.data!=null){
            let oneProduct = this.posProducts.filter(x=>x.id == this.data['id']);
            if(ArrayFunctions.inArray(oneProduct[0].taxes.map(x=>x.id)[i],data.map(x=>x.id))){
              this.formPosProducts.get('taxes').value[i+1].checked=true;
            }
          }
        }
    
    }
    ))

    

  }

  addData(){
    this._subscription.add(this.posProductsService.getAll().subscribe(
      (data:any[])=>{
        data=data.concat({
          id:6,
          name:this.formPosProducts.get('name').value,
          title:this.formPosProducts.get('title').value,
          description:this.formPosProducts.get('description').value,
          status:this.formPosProducts.get('status').value,
          posPoint:
          {
            title:this.formPosProducts.get('posPoint').value
          },
          category:
          {
            title:this.formPosProducts.get('category').value
          },
          revenueLabel:
          {
            title:this.formPosProducts.get('revenueLabel').value
          },
          revenueCategory:
          {
            title: this.formPosProducts.get('revenueCategory').value
          },
          price:this.formPosProducts.get('price').value,
          taxes:this.formPosProducts.get('taxes').value
        });
        console.log(data)
        this.posProductsDataService.posProductsData.next(data);
      }
    ));

    this.formPosProductsDialogRef.close(this.formPosProducts.value);
  }

  toggleCheckbox(isChecked,elementId){
    console.log(isChecked+" "+elementId)
    
      this.formPosProducts.get('taxes').controls[elementId].value.checked = isChecked;
    
    // console.log(this.formPosProducts.value);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
