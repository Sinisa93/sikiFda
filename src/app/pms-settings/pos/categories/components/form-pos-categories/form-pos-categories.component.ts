import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../../../../../node_modules/@angular/forms';
import { PosCategoriesService } from '../../../../services/pos-categories.service';
import { Observable, Subscription } from '../../../../../../../node_modules/rxjs';
import { PosCategory } from '../../../../../interfaces/pos-category';
import { PosPoint } from '../../../../../interfaces/pos-point';
import { PosPointsService } from '../../../../services/pos-points.service';
import { tap } from '../../../../../../../node_modules/rxjs/internal/operators';
import { PosCategoriesDataService } from '../../../../services/pos-categories-data.service';

@Component({
  selector: 'app-form-pos-categories',
  templateUrl: './form-pos-categories.component.html',
  styleUrls: ['./form-pos-categories.component.css']
})
export class FormPosCategoriesComponent implements OnInit, OnDestroy {

  constructor(
    public formPosCategoriesDialogRef:MatDialogRef<FormPosCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:object,
    private formBuilder:FormBuilder,
    private posCategoriesService:PosCategoriesService,
    private posPointsService:PosPointsService,
    private posCategoriesDataService:PosCategoriesDataService
  ) { }
  // posPointss:Observable<PosPoint[]>;
  private _posCategories:Observable<PosCategory[]>;
   private posPoints : PosPoint[] =[
    {
      id:1,
      title:"Store",
      description:"This is description about Store point",
      status:true
    },
    {
      id:2,
      title:"Test Point",
      description:"This is description about Test Point",
      status:true
    }
  ];

  
  private formPosCategories:FormGroup=this.formBuilder.group({
    id:[],
    title:['', Validators.required],
    description:[],
    point:['', Validators.required],
    status:[]
  });

  private subscription=new Subscription();

  ngOnInit() {
    (this.data['id']==null) ? this.data=null : '';

    if (this.data) { 
      
      this._posCategories=this.posCategoriesService.getById(this.data['id']).pipe(
        tap(items=>{
          this.formPosCategories.patchValue(items[0]);
          
        })
      )
    }
}

addData(){
  this.subscription.add(this.posCategoriesService.getAll().subscribe(
    (data:any[])=>{
      data=data.concat({
        id:6,
        title:this.formPosCategories.get('title').value,
        description:this.formPosCategories.get('description').value,
        status:this.formPosCategories.get('status').value,
        point:this.formPosCategories.get('point').value
      });

      this.posCategoriesDataService.posCategoriesData.next(data);
    }
  ));

  this.formPosCategoriesDialogRef.close(this.formPosCategories.value);
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
